const fs = require('fs');
const path = require('path');
const context = require('../database/models')

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
        var user = req.session.user;
        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let products = JSON.parse(jsonProducts);

        res.render('products/listado', { 'products': req.query.search ? products.filter(game => game.name.toUpperCase().includes(req.query.search.toUpperCase())) : products, "titulo": req.query.search ? "Resultado de la busqueda" : "Catalogo", "emptyMessage": req.query.search ? "No hay resultados para esta busqueda" : "No hay nada en el catalogo para mostrar", 'user': user });
    },

    create: function (req, res) {
        var user = req.session.user;
        res.render('products/creacion', { 'user': user });
    },

    save: function (req, res) {
        let request = req.body;
        let id = 1

        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let products = JSON.parse(jsonProducts);

        products.forEach((product, index, array) => {
            if (product.id >= id) {
                id = product.id + 1
            }
        });

        let caratula = req.files.caratula[0];
        let previews = req.files.gallery;

        let newProduct = {
            'id': id,
            'url': '../images/Imágenes de Juegos PS4/' + caratula.filename,
            'name': request.name,
            'price': Number(request.price),
            'date': request.date,
            'videoUrl': request.videoUrl,
            'desarrolladora': request.desarrolladora,
            'productora': request.productora,
            'juagdores': request.juagdores,
            'idioma': request.idioma,
            'discount': Number(request.discount),
            'sugerido': request.sugerido ? true : false,
            'previews': [],
            'category': request.category,
            'descripcion': request.descripcion,
        }

        previews.forEach(p => newProduct.previews.push('../images/Imágenes de Juegos PS4/' + p.filename));

        products.push(newProduct);

        let jsonProdctsSave = JSON.stringify(products);
        fs.writeFileSync(productsPath, jsonProdctsSave, 'utf-8');

        res.redirect("/products")
    },

    edit: function (req, res) {
        var user = req.session.user;
        let id = req.query.id;
        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let products = JSON.parse(jsonProducts);
        let product = products.find(product => product.id == id);
        res.render('products/edicion', { 'product': product, 'user': user });
    },

    saveEdit: function (req, res) {
        let request = req.body;
        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');

        let products = JSON.parse(jsonProducts);

        let product = products.find(product => product.id == req.params.id);

        product.price = Number(request.price);
        product.category = request.category;
        product.date = request.date;
        product.videoUrl = request.videoUrl;
        product.desarrolladora = request.desarrolladora;
        product.productora = request.productora;
        product.juagdores = request.juagdores;
        product.idioma = request.idioma;
        product.discount = Number(request.discount);
        product.sugerido = request.sugerido ? true : false;
        product.category = request.category;
        product.descripcion = request.descripcion;

        if (req.files.caratula || req.files.gallery) {
            if (req.files.caratula || req.files.caratula.length) {
                let caratula = req.files.caratula[0];
                product.url = '../images/Imágenes de Juegos PS4/' + caratula.filename;
            }

            if (req.files.gallery || req.files.gallery.length) {
                let previews = req.files.gallery;
                previews.forEach(p => newProduct.previews.push('../images/Imágenes de Juegos PS4/' + p.filename));
            }
        }

        let jsonProdctsSave = JSON.stringify(products);
        fs.writeFileSync(productsPath, jsonProdctsSave, 'utf-8');

        res.redirect("/products");
    },

    deatil: function (req, res) {
        var user = req.session.user;
        let id = req.params.id;
        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let products = JSON.parse(jsonProducts);
        let product = products.find(product => product.id == id);
        res.render('products/detalle', { 'product': product, 'user': user });
    },

    delete: function (req, res) {
        let jsonProducts = fs.readFileSync(productsPath, 'utf-8');
        let products = JSON.parse(jsonProducts);

        console.log(products)

        console.log(req.params.id);

        let productIndex = products.findIndex(product => product.id == req.params.id);

        console.log(productIndex);

        products.splice(productIndex, 1)

        let jsonProdctsSave = JSON.stringify(products);
        fs.writeFileSync(productsPath, jsonProdctsSave, 'utf-8');

        res.redirect("/products");
    },

};

module.exports = productsController