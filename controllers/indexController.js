const fs = require('fs');
const path = require('path');

let indexController = {

    onGet: function (req, res) {
        var user = req.session.user;
        let jsonProducts = fs.readFileSync(path.join(__dirname, '../data/games.json'), 'utf-8');
        let products = JSON.parse(jsonProducts);
        console.log(user);
        console.log(req.session);
        res.render('index', { 'products': products, 'user': user });
    }

};

module.exports = indexController