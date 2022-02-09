let products = [
    {
        'id':1,
        'url':'images/Imágenes de Juegos PS4/Assassin’s Creed Valhalla.jpg',
        'name':'Assassin’s Creed Valhalla',
        'price':'$20.000',
    },
    {
        'id':2,
        'url':'images/Imágenes de Juegos PS4/Call of Duty Black Ops Cold War.jpg',
        'name':'Black Ops Cold War',
        'price':'$30.000',
    },
    {
        'id':3,
        'url':'images/Imágenes de Juegos PS4/Dragon Ball Fighterz.jpg',
        'name':'Dragon Ball Fighterz',
        'price':'$40.000',
    },
    {
        'id':4,
        'url':'images/Imágenes de Juegos PS4/FIFA-22.jpg',
        'name':'FIFA-22',
        'price':'$50.000',
    },
    {
        'id':5,
        'url':'images/Imágenes de Juegos PS4/God of War III Remastered.jpg',
        'name':'God of War III Remastered',
        'price':'$50.000',
    },
    {
        'id':6,
        'url':'images/Imágenes de Juegos PS4/Jump Force.jpg',
        'name':'Jump Force',
        'price':'$40.000',
    },
    {
        'id':7,
        'url':'images/Imágenes de Juegos PS4/LEGO Marvel Super Heroes 2.jpg',
        'name':'LEGO Marvel Super Heroes 2',
        'price':'$30.000',
    },
    {
        'id':8,
        'url':'images/Imágenes de Juegos PS4/Metal gear solid V the phantom pain.jpg',
        'name':'Metal gear solid V the phantom pain',
        'price':'$20.000',
    },
    {
        'id':9,
        'url':'images/Imágenes de Juegos PS4/mortal kombat xl.jpg',
        'name':'mortal kombat xl',
        'price':'$60.000',
    },
    {
        'id':10,
        'url':'images/Imágenes de Juegos PS4/Need for Speed Heat.jpg',
        'name':'Need for Speed Heat',
        'price':'$80.000',
    },
]

let indexController = {
   
    onGet: function(req, res)
    {
       res.render('index',{'products':products});
    } 
    
 };
 
 module.exports = indexController