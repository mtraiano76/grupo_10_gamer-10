const fs = require('fs');

let indexController = {
   
    onGet: function(req, res)
    {
        let jsonProducts = fs.readFileSync('games.json', 'utf-8');
        let products = JSON.parse(jsonProducts);

       res.render('index',{'products':products});
    } 
    
 };
 
 module.exports = indexController