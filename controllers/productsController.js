const { save } = require("debug/src/browser");
const { send } = require("express/lib/response");

let products = [
   {
       'id':1,
       'url':'../images/Imágenes de Juegos PS4/Assassin’s Creed Valhalla.jpg',
       'previews': [
            '../images/Imágenes de Juegos PS4/assa/assa1.jpg',
            '../images/Imágenes de Juegos PS4/assa/assa2.jpg',
            '../images/Imágenes de Juegos PS4/assa/assa3.jpg',
            '../images/Imágenes de Juegos PS4/assa/assa4.jpg',
            '../images/Imágenes de Juegos PS4/assa/assa5.jpg',
            '../images/Imágenes de Juegos PS4/assa/assa6.jpg',
       ],
       'name':'Assassin’s Creed Valhalla',
       'price':20000,
       'category':'Acción',
       'date':'',
       'videoUrl':'',
       'desarrolladora':'',
       'productora':'',
       'juagdores':'',
       'distribuidora':'',
       'formato':'',
       'idioma':'',
       'descripcion':'',
       'discount':0,
   },
   {
       'id':2,
       'url':'../images/Imágenes de Juegos PS4/Call of Duty Black Ops Cold War.jpg',
       'name':'Black Ops Cold War',
       'price':30000,
       'category':'Guerra'
   },
   {
       'id':3,
       'url':'../images/Imágenes de Juegos PS4/Dragon Ball Fighterz.jpg',
       'name':'Dragon Ball Fighterz',
       'price':40000,
       'category':'Pelea'
   },
   {
       'id':4,
       'url':'../images/Imágenes de Juegos PS4/FIFA-22.jpg',
       'name':'FIFA-22',
       'price':50000,
       'category':'Deporte'
   },
   {
       'id':5,
       'url':'../images/Imágenes de Juegos PS4/God of War III Remastered.jpg',
       'name':'God of War III Remastered',
       'price':50000,
       'category':'Acción'
   },
   {
       'id':6,
       'url':'../images/Imágenes de Juegos PS4/Jump Force.jpg',
       'name':'Jump Force',
       'price':40000,
       'category':'Pelea'
   },
   {
       'id':7,
       'url':'../images/Imágenes de Juegos PS4/LEGO Marvel Super Heroes 2.jpg',
       'name':'LEGO Marvel Super Heroes 2',
       'price':30000,
       'category':'Acción'
   },
   {
       'id':8,
       'url':'../images/Imágenes de Juegos PS4/Metal gear solid V the phantom pain.jpg',
       'name':'Metal gear solid V the phantom pain',
       'price':20000,
       'category':'Role'
   },
   {
       'id':9,
       'url':'../images/Imágenes de Juegos PS4/mortal kombat xl.jpg',
       'name':'mortal kombat xl',
       'price':60000,
       'category':'Pelea'
   },
   {
       'id':10,
       'url':'../images/Imágenes de Juegos PS4/Need for Speed Heat.jpg',
       'name':'Need for Speed Heat',
       'price':80000,
       'category':'Carreras'
   },
]

let cartProducts = [
    {
        'id':1,
        'url':'../images/Imágenes de Juegos PS4/Assassin’s Creed Valhalla.jpg',
        'name':'Assassin’s Creed Valhalla',
        'price':20000,
        'category':'Acción',
        'quantity':2
    },
    {
        'id':2,
        'url':'../images/Imágenes de Juegos PS4/Call of Duty Black Ops Cold War.jpg',
        'name':'Black Ops Cold War',
        'price':30000,
        'category':'Guerra',
        'quantity':1
    },
]

let suggestedProducts = [
    {
        'id':5,
        'url':'../images/Imágenes de Juegos PS4/God of War III Remastered.jpg',
        'name':'God of War III Remastered',
        'price':50000,
        'category':'Acción'
    },
    {
        'id':6,
        'url':'../images/Imágenes de Juegos PS4/Jump Force.jpg',
        'name':'Jump Force',
        'price':40000,
        'category':'Pelea'
    },
    {
        'id':7,
        'url':'../images/Imágenes de Juegos PS4/LEGO Marvel Super Heroes 2.jpg',
        'name':'LEGO Marvel Super Heroes 2',
        'price':30000,
        'category':'Acción'
    },
    {
        'id':8,
        'url':'../images/Imágenes de Juegos PS4/Metal gear solid V the phantom pain.jpg',
        'name':'Metal gear solid V the phantom pain',
        'price':20000,
        'category':'Role'
    },
]

let productsController = {
   
    shoppingCart: function(req, res)
    {
        let totalPrice = cartProducts.reduce((sum, value) => (typeof value.price == "number" && typeof value.quantity == "number" ? sum + (value.price*value.quantity) : sum), 0);
        res.render('products/carrito',{'cartProducts':cartProducts, 'suggestedProducts':suggestedProducts, 'totalPrice':totalPrice});
    },

    list: function(req, res)
    {
        res.render('products/listado',{products});
    },

    create: function(req, res)
    {
        res.render('products/creacion');
    },

    save: function(req, res)
    {
        let request = req.body;
        let id = 1
        
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
        res.redirect("/products")
    },

    edit: function(req, res)
    {
        let id = req.query.id;
        let product = products.find(product => product.id == id);
        res.render('products/edicion', {'product':product});
    },
    
    saveEdit: function(req, res)
    {
        let request = req.body;

        let product = products.find(product => product.id == request.id);
        product.price = request.price;
        product.url = !!request.url ? request.url : product.url;
        product.category = request.category
        
        res.redirect("/products");
    },

    deatil: function(req, res)
    {
        let id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render('products/detalle', {'product':product});
    },

 };
 
 module.exports = productsController