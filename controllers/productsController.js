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
       'date':'10/11/2020',
       'videoUrl':'https://youtu.be/L0Fr3cS3MtY',
       'desarrolladora':'Ubisoft Montreal',
       'productora':'Ubisoft',
       'juagdores':'1',
       'idioma':'inglés/español',
       'descripcion':'Encarna a Eivor, un legendario saqueador vikingo en busca de la gloria. Explora la edad oscura inglesa conforme atacas a tus enemigos, haces crecer tus asentamientos y construyes tu poder político.',
       'discount':0,
   },
   {
       'id':2,
       'url':'../images/Imágenes de Juegos PS4/Call of Duty Black Ops Cold War.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar.jpg',
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar1.jpg',
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar2.jpg',
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar3.jpg',
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar4.jpeg',
        '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar5.jpeg',
   ],
       'name':'Black Ops Cold War',
       'price':30000,
       'category':'Guerra',
       'date':'13/11/2020',
       'videoUrl':'https://youtu.be/SvNTIPZTulk',
       'desarrolladora':'Treyarch y Raven Software',
       'productora':'Activision',
       'juagdores':'1-4',
       'idioma':'inglés/español',
       'descripcion':'Un grupo de varios soldados dejaran de lado sus diferencias por una causa común: detener un complot nazi secreto en los últimos días de la Segunda Guerra Mundial.',
       'discount':0,
   },
   {
       'id':3,
       'url':'../images/Imágenes de Juegos PS4/Dragon Ball Fighterz.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/dragonBallFighterz/dragonBallFighterz.jpg',
        '../images/Imágenes de Juegos PS4/dragonBallFighterz/dragonBallFighterz1.jpg',
        '../images/Imágenes de Juegos PS4/dragonBallFighterz/dragonBallFighterz2.jpg',
        '../images/Imágenes de Juegos PS4/dragonBallFighterz/dragonBallFighterz3.jpg',
        '../images/Imágenes de Juegos PS4/dragonBallFighterz/dragonBallFighterz5.jpg',
   ],
       'name':'Dragon Ball Fighterz',
       'price':40000,
       'category':'Pelea',
       'date':'27/09/2018',
       'videoUrl':'https://youtu.be/mImC9oinZDs',
       'desarrolladora':'Arc System Works',
       'productora':'Bandai Namco Entertainment',
       'juagdores':'1-4',
       'idioma':'inglés/español',
       'descripcion':'¡DRAGON BALL FIGHTERZ ofrece a los jugadores la mejor experiencia de juego DRAGON BALL! Desarrolla tu propio guerrero, crea el avatar perfecto, entrena para aprender nuevas habilidades y ayuda a luchar contra nuevos enemigos para restaurar la historia original de la serie DRAGON BALL. Únete a 300 jugadores de todo el mundo en la nueva ciudad central de Conton y lucha con ellos o contra ellos.',
       'discount':0,
   },
   {
       'id':4,
       'url':'../images/Imágenes de Juegos PS4/FIFA-22.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-0.jpg',
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-1.jpg',
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-2.jpeg',
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-3.jpg',
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-4.jpeg',
        '../images/Imágenes de Juegos PS4/fifa22/fifa22-5.jpg',
   ],
       'name':'FIFA-22',
       'price':50000,
       'category':'Deporte',
       'date':'11/07/2021',
       'videoUrl':'https://youtu.be/vLj-27T-SEQ',
       'desarrolladora':'EA Vancouver y EA Romania',
       'productora':'EA Sports',
       'juagdores':'1-4',
       'idioma':'inglés/español',
       'descripcion':'Las nuevas funciones de juego en FIFA 22 te brindan más consistencia entre las publicaciones con una reescritura del portero que brinda más compostura a la posición más importante en el campo, junto con una nueva física del balón, un sprint explosivo y nuevas tácticas de ataque que te permiten tomar el control de tu juegos de equipo. En el modo Carrera, vive tus sueños futbolísticos mientras creas y gestionas el club más nuevo del juego hacia la gloria. VOLTA FOOTBALL te recompensa por tu estilo con un estilo de juego reducido y nuevas formas de jugar y progresar cada temporada.',
       'discount':0,
   },
   {
       'id':5,
       'url':'../images/Imágenes de Juegos PS4/God of War III Remastered.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered.jpg',
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered1.jpg',
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered2.jpg',
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered3.jpg',
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered4.jpg',
        '../images/Imágenes de Juegos PS4/godOfWar3Remastered/godOfWar3Remastered5.jpg',
   ],
       'name':'God of War III Remastered',
       'price':50000,
       'category':'Acción',
       'date':'22/03/2005',
       'videoUrl':'https://youtu.be/vtFhDrMIZjE',
       'desarrolladora':' Santa Monica Studio',
       'productora':'Sony Computer Entertainment (SCE)',
       'juagdores':'1',
       'idioma':'inglés/español',
       'descripcion':'Kratos y Atreus deberán viajar a cada uno de los nueve reinos en busca de respuestas para prepararse.',
       'discount':0,
   },
   {
       'id':6,
       'url':'../images/Imágenes de Juegos PS4/Jump Force.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce.jpg',
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce1.jpg',
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce2.jpg',
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce3.jpg',
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce4.jpg',
        '../images/Imágenes de Juegos PS4/jumpForce/jumpForce5.jpg',
   ],
       'name':'Jump Force',
       'price':40000,
       'category':'Pelea',
       'date':'10/11/2021',
       'videoUrl':'https://youtu.be/D02r3Ph9tM8',
       'desarrolladora':'Spike Chunsoft',
       'productora':'Bandai Namco',
       'juagdores':'1-4',
       'idioma':'inglés',
       'descripcion':'Jump Force es un juego de lucha que reúne a los personajes de las principales franquicias vistas en la revista Shonen Jump de Shueisha. Así, en este crossover para PS4 podemos ver a luchadores como Goku, Vegeta o Freezer de Dragon Ball Z peleando contra Luffy, Sanji o Zoro de One Piece. También aparecen mangas como Naruto, Boruto, Saint Seiya o My Hero Academia, entre muchos otros.',
       'discount':0,
   },
   {
       'id':7,
       'url':'../images/Imágenes de Juegos PS4/LEGO Marvel Super Heroes 2.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-0.jpg',
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-1.jpg',
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-2.jpg',
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-3.jpg',
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-4.jpg',
        '../images/Imágenes de Juegos PS4/legoMarvelSuperhero2/legoMarvelSuperhero2-5.jpg',
   ],
       'name':'LEGO Marvel Super Heroes 2',
       'price':30000,
       'category':'Acción',
       'date':'2/08/2018',
       'videoUrl':'https://youtu.be/hyWbPHrsW_g',
       'desarrolladora':'TT Games',
       'productora':'Warner Bros',
       'juagdores':'1',
       'idioma':'inglés',
       'descripcion':'Por una parte, LEGO Marvel Avengers nos permitirá revivir con los LEGO la primera película de Los Vengadores del año 2012 y su esperada secuela La Era de Ultrón. Este videojuego saldrá a la venta en otoño de este año para PS4',
       'discount':0,
   },
   {
       'id':8,
       'url':'../images/Imágenes de Juegos PS4/Metal gear solid V the phantom pain.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain.jpg',
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain1.jpg',
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain2.jpg',
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain3.jpg',
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain4.jpg',
        '../images/Imágenes de Juegos PS4/metalGearSoldierVPhantonPain/metalGearSoldierVPhantonPain5.jpg',
   ],
       'name':'Metal gear solid V the phantom pain',
       'price':20000,
       'category':'Role',
       'date':'24/04/2014',
       'videoUrl':'https://youtu.be/L5SsuDFu_ys',
       'desarrolladora':'Kojima Productions',
       'productora':'Konami',
       'juagdores':'1',
       'idioma':'inglés',
       'descripcion':'METAL GEAR SOLID V: THE PHANTOM PAIN, acá nos despertamos de un coma en un hospital luego de 9 años de la historia pasada.  Nuestros enemigos siguen afuera y tendremos que cumplir la difícil misión de rescatar a un nuestro querido socio Miller.',
       'discount':0,
   },
   {
       'id':9,
       'url':'../images/Imágenes de Juegos PS4/mortal kombat xl.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL.jpg',
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL1.jpg',
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL2.jpg',
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL3.jpg',
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL4.jpg',
        '../images/Imágenes de Juegos PS4/mortalKombarXL/mortalKombarXL5.jpg',
   ],
       'name':'mortal kombat xl',
       'price':60000,
       'category':'Pelea',
       'date':'10/05/2019',
       'videoUrl':'https://youtu.be/mWytXS73aFI',
       'desarrolladora':'NetherRealm Studios',
       'productora':'Warner Bros. Interactive Entertainment',
       'juagdores':'1-4',
       'idioma':'español',
       'descripcion':'Las nuevas variaciones de personajes personalizados te dan un control sin precedentes de tus luchadores para que sean tuyos. El nuevo motor gráfico muestra cada momento desgarrador y deslumbrante, acercándote tanto a la pelea que puedes sentirlo. Con una lista de nuevos y recurrentes Klassic Fighters, el mejor modo de historia cinematográfica de Mortal Kombat continúa la saga épica durante más de 25 años',
       'discount':0,
   },
   {
       'id':10,
       'url':'../images/Imágenes de Juegos PS4/Need for Speed Heat.jpg',
       'previews': [
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat.jpg',
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat1.jpg',
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat2.jpg',
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat3.jpg',
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat4.jpg',
        '../images/Imágenes de Juegos PS4/Need for Speed Heat/needForSpeedHeat5.jpg',
   ],
       'name':'Need for Speed Heat',
       'price':80000,
       'category':'Carreras',
       'date':'8/11/2019',
       'videoUrl':'https://youtu.be/04KPiGmC7Lc',
       'desarrolladora':'Ghost Games',
       'productora':'Electronic Arts',
       'juagdores':'1-2',
       'idioma':'inglés/español',
       'descripcion':'Apúrate durante el día y arriesga todo por la noche en Need for Speed Heat, una experiencia de carrera emocionante que te enfrenta a la fuerza policial de una ciudad mientras te abres camino en la élite de las carreras callejeras.',
       'discount':0,
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