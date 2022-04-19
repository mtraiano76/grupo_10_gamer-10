const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
let usersPath = path.join(__dirname, '../data/users.json');
let bcrypt = require('bcryptjs');

let usersController = {

   login: function (req, res) {
      res.render('users/login');
   },

   register: function (req, res) {
      res.render('users/registro');
   },

   complete_register: function (req, res) {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
         let request = req.body;
         let id = 1

         let usersJson = fs.readFileSync(usersPath, 'utf-8');
         let users = JSON.parse(usersJson);

         users.forEach((user, index, array) => {
            if (user.id >= id) {
               id = user.id + 1
            }
         });

         let profileImage = req.files.caratula[0];

         let newUser = {
            'id': id,
            'url': '../images/profiles/' + profileImage.filename,
            'name': request.nombre,
            'lastname': request.apellido,
            'email': request.email,
            'password': bcrypt.hash(request.password, 10),
         }

         users.push(newUser);

         let jsonUsersSave = JSON.stringify(users);
         fs.writeFileSync(usersPath, jsonUsersSave, 'utf-8');

         res.redirect("/users")
      }
      else {
         console.log(errors.mapped());
         console.log(req.body);
         res.render('users/registro', { errors: errors.mapped(), old: req.body });
      }

   }

};

module.exports = usersController