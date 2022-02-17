const fs = require('fs');
const path = require('path');

let indexController = {
   
    onGet: function(req, res)
    {
        let jsonProducts = fs.readFileSync(path.join(__dirname, '../data/games.json'), 'utf-8');
        let products = JSON.parse(jsonProducts);

       res.render('index',{'products':products});
    } 
    
 };
 
 module.exports = indexController