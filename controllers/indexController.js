const fs = require('fs');
const path = require('path');
const context = require('../database/models')

let indexController = {

    onGet: function (req, res) {
        var user = req.session.user;

        context.Product.findAll()
            .then((resultados) => {
                res.render('index', { 'products': resultados, 'user': user });
            }).catch(function (err) {
                res.redirect('/index');
            });

        // let jsonProducts = fs.readFileSync(path.join(__dirname, '../data/games.json'), 'utf-8');
        // let products = JSON.parse(jsonProducts);
        // console.log(user);
        // console.log(req.session);

    }

};

module.exports = indexController