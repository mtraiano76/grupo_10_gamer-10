const fs = require('fs');

let productsController = {
   
    shoppingCart: function(req, res)
    {
        let jsonCartProducts = fs.readFileSync('cart-games.json', 'utf-8');
        let cartProducts = JSON.parse(jsonCartProducts);

        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let suggestedProducts = JSON.parse(jsonProducts);

        let totalPrice = cartProducts.reduce((sum, value) => (typeof value.price == "number" && typeof value.quantity == "number" ? sum + (value.price*value.quantity) : sum), 0);
        res.render('products/carrito',{cartProducts, 'suggestedProducts':suggestedProducts.filter(game => game.sugerido), 'totalPrice':totalPrice});
    },

    list: function(req, res)
    {
        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);


       
        res.render('products/listado',{'products':req.query.search ? products.filter(game => game.name.toUpperCase().includes(req.query.search.toUpperCase())) : products , "titulo" : req.query.search ? "Resultado de la busqueda":"Catalogo", "emptyMessage":req.query.search ? "No hay resultados para esta busqueda":"No hay nada en el catalogo para mostrar"});
    },

    create: function(req, res)
    {
        res.render('products/creacion');
    },

    save: function(req, res)
    {
        let request = req.body;
        let id = 1

        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);
        
        products.forEach((product, index, array) => {
            if(product.id >= id)
            {
                id = product.id+1
            }
        });

        let newProduct = {
            'id':id,
            'url':request.url,
            'name':request.name,
            'price': request.price,
            'category':request.category
        }
        products.push(newProduct);

        let jsonProdctsSave = JSON.stringify(products);
        fs.writeFileSync('games.json', jsonProdctsSave, 'utf-8'); 

        res.redirect("/products")
    },

    edit: function(req, res)
    {
        let id = req.query.id;
        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);
        let product = products.find(product => product.id == id);
        res.render('products/edicion', {'product':product});
    },
    
    saveEdit: function(req, res)
    {
        let request = req.body;

        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);

        let product = products.find(product => product.id == request.id);
        
        product.price = request.price;
        product.url = !!request.url ? request.url : product.url;
        product.category = request.category

        let jsonProdctsSave = JSON.stringify(products);
        fs.writeFileSync('games.json', jsonProdctsSave, 'utf-8'); 
        
        res.redirect("/products");
    },

    deatil: function(req, res)
    {
        let id = req.params.id;
        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);
        let product = products.find(product => product.id == id);
        res.render('products/detalle', {'product':product});
    },

 };
 
 module.exports = productsController