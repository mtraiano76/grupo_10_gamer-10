const fs = require('fs');
const path = require('path');
const context = require('../database/models')

let indexController = {

    onGet: function (req, res) {
        var user = req.session.user;

        context.Product.findAll({raw: true,})
            .then((resultados) => {
                console.log(resultados);
                res.render('index', { 'products': resultados, 'user': user });
            }).catch(function (err) {
                res.redirect('/index');
            });
    }

};

module.exports = indexController