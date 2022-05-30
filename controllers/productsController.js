const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const context = require('../database/models')
const { Op, where } = require("sequelize");

let productsPath = path.join(__dirname, '../data/games.json');
let productsCartPath = path.join(__dirname, '../data/cart-games.json');

let productsController = {

    shoppingCart: function (req, res) {
        var user = req.session.user;
        let jsonCartProducts = fs.readFileSync(productsCartPath, 'utf-8');
        let cartProducts = JSON.parse(jsonCartProducts);

        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let suggestedProducts = JSON.parse(jsonProducts);

        let totalPrice = cartProducts.reduce((sum, value) => (typeof value.price == "number" && typeof value.quantity == "number" ? sum + (value.price * value.quantity) : sum), 0);
        res.render('products/carrito', { cartProducts, 'suggestedProducts': suggestedProducts.filter(game => game.sugerido), 'totalPrice': totalPrice, 'user': user });
    },

    list: function (req, res) {
        console.log(req.session);
        var user = req.session.user;
        var rol = req.session.rol;
        console.log(rol);
        if (req.query.search) {
            context.Product.findAll({
                raw: true,
                where: {
                    Name: {
                        [Op.like]: '%' + req.query.search + '%'
                    }
                }
            }).then((resultados) => {
                console.log(resultados);
                res.render('products/listado', { 'products': resultados, "titulo": "Resultado de la busqueda", "emptyMessage": "No hay resultados para esta busqueda", 'user': user, 'rol': rol });
            }).catch(function (err) {
                res.redirect('/');
            });
        }
        else {
            context.Product.findAll({ raw: true, })
                .then((resultados) => {
                    console.log(resultados);
                    res.render('products/listado', { 'products': resultados, "titulo": "Catalogo", "emptyMessage": "No hay nada en el catalogo para mostrar", 'user': user, 'rol': rol });
                }).catch(function (err) {
                    res.redirect('/');
                });
        }

    },

    create: function (req, res) {
        var user = req.session.user;

        context.Developer.findAll({ raw: true, })
            .then((developerResults) => {
                context.Producer.findAll({ raw: true, })
                    .then((producerResults) => {
                        context.Category.findAll({ raw: true, })
                            .then((categoryResults) => {
                                context.Languages.findAll({ raw: true, })
                                    .then((lenguageResults) => {
                                        console.log('-------------------------------------Cargo----------------------------------------------')

                                        res.render('products/creacion', {
                                            'user': user, 'desarrolladoras': developerResults,
                                            'productoras': producerResults,
                                            'idiomas': lenguageResults,
                                            'categories': categoryResults
                                        });
                                    }).catch(function (err) {
                                        console.log('-------------------------------------failed-search-languajes----------------------------------------------')
                                        console.log(err);
                                        res.redirect('/');
                                    });
                            }).catch(function (err) {
                                console.log('-------------------------------------failed-search-Category----------------------------------------------')
                                console.log(err); res.redirect('/');
                            });
                    }).catch(function (err) {
                        console.log('-------------------------------------failed-search-Producer----------------------------------------------')
                        console.log(err); res.redirect('/');
                    });
            }).catch(function (err) {
                console.log('-------------------------------------failed-search-Developer----------------------------------------------')
                console.log(err); res.redirect('/');
            });
    },

    save: function (req, res) {
        let errors = validationResult(req);
        var user = req.session.user;

        console.log(errors);
        if (errors.isEmpty()) {

            let request = req.body;
            let id = 1

            let caratula = req.files.caratula[0];
            let previews = req.files.gallery;
            console.log('-----------------------------------------------Crear Producto---------------------------------------------------')
            context.Product.create({
                Name: request.name,
                CoverageUrl: '../images/Imágenes de Juegos PS4/' + ((caratula && caratula.filename) ? caratula.filename : 'Preview.png'),
                Price: Number(request.price),
                ReleaseDate: new Date(request.date),
                VideoUrl: request.videoUrl,
                developerId: request.desarrolladora,
                producerId: request.productora,
                PlayersQuantity: request.juagdores,
                languageId: request.idioma,
                Discount: Number(request.discount),
                IsSuggested: request.sugerido ? true : false,
                categoryId: request.category,
                Description: request.descripcion,
                createdAt: new Date(),
                updateAt: new Date(),
            }).then((result) => {
                console.log('-----------------------------------------------Creado Producto---------------------------------------------------')
                console.log(result)
                previews.forEach(p => {
                    context.ProductGalleryImage.create({
                        productId: result.dataValues.id,
                        ImageUrl: '../images/Imágenes de Juegos PS4/' + p.filename,
                        createdAt: new Date(),
                        updateAt: new Date(),
                    }).then((galleryResult) => {
                        console.log('-------------------------------------Imagen galeria creado----------------------------------------------')
                    }).catch(function (err) {
                        console.log('-------------------------------------Imagen galeria creado ERROR----------------------------------------------');
                        console.log(err);
                        res.redirect("/products")
                    })
                });

                res.redirect("/products")
            }).catch(function (err) {
                console.log('-------------------------------------ErrorCreando----------------------------------------------')
                console.log(err);
                context.Developer.findAll({ raw: true, })
                    .then((developerResults) => {
                        context.Producer.findAll({ raw: true, })
                            .then((producerResults) => {
                                context.Category.findAll({ raw: true, })
                                    .then((categoryResults) => {
                                        context.Languages.findAll({ raw: true, })
                                            .then((lenguageResults) => {
                                                console.log('-------------------------------------CargandiSitioTrasErrorCreando----------------------------------------------')
                                                console.log(req.body);
                                                res.render('products/creacion', {
                                                    'user': user,
                                                    'desarrolladoras': developerResults,
                                                    'productoras': producerResults,
                                                    'idiomas': lenguageResults,
                                                    'categories': categoryResults,
                                                    old: req.body
                                                });
                                            }).catch(function (err) {
                                                console.log('-------------------------------------CargandiSitioTrasErrorCreando-failed-search-languajes----------------------------------------------')
                                                console.log(err);
                                                res.redirect('/products');
                                            });
                                    }).catch(function (err) {
                                        console.log('-------------------------------------CargandiSitioTrasErrorCreando-failed-search-Category----------------------------------------------')
                                        console.log(err); res.redirect('/products');
                                    });
                            }).catch(function (err) {
                                console.log('-------------------------------------CargandiSitioTrasErrorCreando-failed-search-Producer----------------------------------------------')
                                console.log(err); res.redirect('/products');
                            });
                    }).catch(function (err) {
                        console.log('-------------------------------------CargandiSitioTrasErrorCreando-failed-search-Developer----------------------------------------------')
                        console.log(err); res.redirect('/products');
                    });
            });
        }
        else {
            context.Developer.findAll({ raw: true, })
                .then((developerResults) => {
                    context.Producer.findAll({ raw: true, })
                        .then((producerResults) => {
                            context.Category.findAll({ raw: true, })
                                .then((categoryResults) => {
                                    context.Languages.findAll({ raw: true, })
                                        .then((lenguageResults) => {
                                            console.log('-------------------------------------Cargo----------------------------------------------')
                                            console.log(req.body);
                                            res.render('products/creacion', {
                                                'user': user,
                                                'desarrolladoras': developerResults,
                                                'productoras': producerResults,
                                                'idiomas': lenguageResults,
                                                'categories': categoryResults,
                                                errors: errors.mapped(),
                                                old: req.body
                                            });
                                        }).catch(function (err) {
                                            console.log('-------------------------------------failed-search-languajes----------------------------------------------')
                                            console.log(err);
                                            res.redirect('/products');
                                        });
                                }).catch(function (err) {
                                    console.log('-------------------------------------failed-search-Category----------------------------------------------')
                                    console.log(err); res.redirect('/products');
                                });
                        }).catch(function (err) {
                            console.log('-------------------------------------failed-search-Producer----------------------------------------------')
                            console.log(err); res.redirect('/products');
                        });
                }).catch(function (err) {
                    console.log('-------------------------------------failed-search-Developer----------------------------------------------')
                    console.log(err); res.redirect('/products');
                });
        }
    },

    edit: function (req, res) {
        var user = req.session.user;
        let id = req.query.id;

        context.Product.findByPk(id, {
            include: [
                { association: "GalleryImages" },
                { association: "developer" },
                { association: "category" },
                { association: "language" },
                { association: "producer" },
            ]
        }).then((resultado) => {
            if (resultado && resultado.dataValues) {
                resultado.dataValues.GalleryImages = resultado.GalleryImages.map(r => r.dataValues);
                resultado.dataValues.developer = resultado.developer.dataValues
                resultado.dataValues.category = resultado.category.dataValues
                resultado.dataValues.language = resultado.language.dataValues
                resultado.dataValues.producer = resultado.producer.dataValues
                console.log(resultado.dataValues);
                context.Developer.findAll({ raw: true, })
                    .then((developerResults) => {
                        context.Producer.findAll({ raw: true, })
                            .then((producerResults) => {
                                context.Category.findAll({ raw: true, })
                                    .then((categoryResults) => {
                                        context.Languages.findAll({ raw: true, })
                                            .then((lenguageResults) => {
                                                console.log('-------------------------------------Cargo----------------------------------------------')

                                                res.render('products/edicion', {
                                                    'product': resultado.dataValues,
                                                    'user': user, 'desarrolladoras': developerResults,
                                                    'productoras': producerResults,
                                                    'idiomas': lenguageResults,
                                                    'categories': categoryResults
                                                });
                                            }).catch(function (err) {
                                                console.log('-------------------------------------failed-search-languajes----------------------------------------------')
                                                console.log(err);
                                                res.redirect('/');
                                            });
                                    }).catch(function (err) {
                                        console.log('-------------------------------------failed-search-Category----------------------------------------------')
                                        console.log(err); res.redirect('/');
                                    });
                            }).catch(function (err) {
                                console.log('-------------------------------------failed-search-Producer----------------------------------------------')
                                console.log(err); res.redirect('/');
                            });
                    }).catch(function (err) {
                        console.log('-------------------------------------failed-search-Developer----------------------------------------------')
                        console.log(err); res.redirect('/');
                    });
            }
            else {
                res.redirect('../404');
            }
        }).catch(function (err) {
            console.log(err);
        });
    },

    saveEdit: function (req, res) {
        let errors = validationResult(req);
        var user = req.session.user;

        console.log(errors);
        if (errors.isEmpty()) {
            let request = req.body;
            let caratula;
            let previews = [];
            if (req.files.caratula || req.files.gallery) {
                if (req.files.caratula || req.files.caratula.length) {
                    caratula = '../images/Imágenes de Juegos PS4/' + req.files.caratula[0].filename;
                }

                if (req.files.gallery || req.files.gallery.length) {
                    req.files.gallery.forEach(p => previews.push('../images/Imágenes de Juegos PS4/' + p.filename));
                }
            }
            console.log(caratula);
            console.log(previews);

            let existingProduct;
            context.Product.findByPk(req.params.id).then((existingProductResultado) => {
                existingProduct = existingProductResultado.dataValues

                console.log(existingProduct);
                context.Product.update(
                    {
                        Name: request.name,
                        CoverageUrl: (caratula ? caratula : existingProduct.CoverageUrl),
                        Price: Number(request.price),
                        ReleaseDate: new Date(request.date),
                        VideoUrl: request.videoUrl,
                        developerId: request.desarrolladora,
                        producerId: request.productora,
                        PlayersQuantity: request.juagdores,
                        languageId: request.idioma,
                        Discount: Number(request.discount),
                        IsSuggested: request.sugerido ? true : false,
                        categoryId: request.category,
                        Description: request.descripcion,
                        updateAt: new Date(),
                    },
                    {
                        where: { id: req.params.id }
                    }).then((productResult) => {
                        if (previews && previews.length > 0) {
                            context.ProductGalleryImage.destroy({
                                where: { productId: req.params.id }
                            }).then((galleryRemoveResult) => {
                                console.log("--------------------------------------------------------------Gellria Removida----------------------------------------------------------");
                                previews.forEach(p => {
                                    context.ProductGalleryImage.create({
                                        productId: req.params.id,
                                        ImageUrl: previews.pop(),
                                        createdAt: new Date(),
                                        updateAt: new Date(),
                                    }).then((galleryResult) => {
                                        console.log('-------------------------------------Imagen galeria creado----------------------------------------------')

                                    }).catch(function (err) {
                                        console.log('-------------------------------------Imagen galeria creado ERROR----------------------------------------------');
                                        console.log(err);
                                    })
                                })
                                res.redirect("/products")
                            }).catch(function (err) {
                                console.log("--------------------------------------------------------------Gellria Removida Error----------------------------------------------------------");
                                console.log(err);
                                console.log(resultado.dataValues.productId);
                            });
                        }
                        else {
                            res.redirect("/products")
                        }

                    }).catch(function (err) {
                        console.log(err);
                    });
            }).catch(function (err) { console.log(err); });
        }
        else {
            context.Product.findByPk(id, {
                include: [
                    { association: "GalleryImages" },
                    { association: "developer" },
                    { association: "category" },
                    { association: "language" },
                    { association: "producer" },
                ]
            }).then((resultado) => {
                if (resultado && resultado.dataValues) {
                    resultado.dataValues.GalleryImages = resultado.GalleryImages.map(r => r.dataValues);
                    resultado.dataValues.developer = resultado.developer.dataValues
                    resultado.dataValues.category = resultado.category.dataValues
                    resultado.dataValues.language = resultado.language.dataValues
                    resultado.dataValues.producer = resultado.producer.dataValues
                    console.log(resultado.dataValues);
                    context.Developer.findAll({ raw: true, })
                        .then((developerResults) => {
                            context.Producer.findAll({ raw: true, })
                                .then((producerResults) => {
                                    context.Category.findAll({ raw: true, })
                                        .then((categoryResults) => {
                                            context.Languages.findAll({ raw: true, })
                                                .then((lenguageResults) => {
                                                    console.log('-------------------------------------Cargo----------------------------------------------')

                                                    res.render('products/edicion', {
                                                        'product': resultado.dataValues,
                                                        'user': user, 'desarrolladoras': developerResults,
                                                        'productoras': producerResults,
                                                        'idiomas': lenguageResults,
                                                        'categories': categoryResults,
                                                        errors: errors.mapped(),
                                                        old: req.body
                                                    });
                                                }).catch(function (err) {
                                                    console.log('-------------------------------------failed-search-languajes----------------------------------------------')
                                                    console.log(err);
                                                    res.redirect('/');
                                                });
                                        }).catch(function (err) {
                                            console.log('-------------------------------------failed-search-Category----------------------------------------------')
                                            console.log(err); res.redirect('/');
                                        });
                                }).catch(function (err) {
                                    console.log('-------------------------------------failed-search-Producer----------------------------------------------')
                                    console.log(err); res.redirect('/');
                                });
                        }).catch(function (err) {
                            console.log('-------------------------------------failed-search-Developer----------------------------------------------')
                            console.log(err); res.redirect('/');
                        });
                }
                else {
                    res.redirect('../404');
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    },

    deatil: function (req, res) {
        var user = req.session.user;
        let id = req.params.id;
        console.log('------------------------------------------obtendiendo detalle-----------------------------------------------------------')

        context.Product.findByPk(id, {
            include: [
                { association: "GalleryImages" },
                { association: "developer" },
                { association: "category" },
                { association: "language" },
                { association: "producer" },
            ]
        }).then((resultado) => {
            if (resultado && resultado.dataValues) {
                resultado.dataValues.GalleryImages = resultado.GalleryImages.map(r => r.dataValues);
                resultado.dataValues.developer = resultado.developer.dataValues
                resultado.dataValues.category = resultado.category.dataValues
                resultado.dataValues.language = resultado.language.dataValues
                resultado.dataValues.producer = resultado.producer.dataValues
                console.log(resultado.dataValues);
                res.render('products/detalle', { 'product': resultado.dataValues, 'user': user });
            }
            else {
                res.redirect('../404');
            }
        }).catch(function (err) {
            console.log(err);
        });
    },

    delete: function (req, res) {
        console.log(req.params.id);

        context.Product.findByPk(req.params.id).then((resultado) => {
            if (resultado && resultado.dataValues) {
                console.log("--------------------------------------------------------------Producto encontrado----------------------------------------------------------");
                console.log(resultado.dataValues);
                context.ProductGalleryImage.destroy({
                    where: { productId: resultado.dataValues.id }
                }).then((galleryRemoveResult) => {
                    console.log("--------------------------------------------------------------Gellria Removida----------------------------------------------------------");
                    context.Product.destroy({
                        where: { id: resultado.dataValues.id }
                    }).then((productRemoveResult) => {
                        console.log("--------------------------------------------------------------Producto Removido----------------------------------------------------------");
                        console.log(productRemoveResult);
                        console.log("--------------------------------------------------------------Intento de navegacion----------------------------------------------------------");
                        res.redirect("/products");
                    }).catch(function (err) {
                        console.log("--------------------------------------------------------------Producto Removido Error----------------------------------------------------------");
                        console.log(err);
                    });
                }).catch(function (err) {
                    console.log("--------------------------------------------------------------Gellria Removida Error----------------------------------------------------------");
                    console.log(err);
                    console.log(resultado.dataValues.productId);
                });

            }
            else {
                res.redirect('/products');
            }
        }).catch(function (err) {
            console.log(err);
            res.redirect("/products");
        });
    },
};

module.exports = productsController