const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
let usersPath = path.join(__dirname, '../data/users.json');
let bcrypt = require('bcryptjs');

let usersController = {

   login: function (req, res) {
      res.render('users/login');
   },

   logout: function (req, res) {
      req.session.user = undefined;
      res.redirect("/");
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

         let newUser = {
            'id': id,
            'name': request.nombre,
            'lastname': request.apellido,
            'email': request.email,
            'password': bcrypt.hashSync(request.password, 10),
         }
         users.push(newUser);
         console.log(newUser);

         console.log(users);
         let jsonUsersSave = JSON.stringify(users);
         fs.writeFileSync(usersPath, jsonUsersSave, 'utf-8');

         res.redirect("/users/login")
      }
      else {
         res.render('users/registro', { errors: errors.mapped(), old: req.body });
      }

   },

   complete_login: function (req, res) {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
         let request = req.body;
         let usersJson = fs.readFileSync(usersPath, 'utf-8');
         let users = JSON.parse(usersJson);

         let user = users.find(u => u.email == request.email);

         if (user) {
            let match = bcrypt.compareSync(request.password, user.password);

            if (match) {
               console.log("loggeado", user)
               req.session.user = user.email;
               console.log(req.session);
               res.redirect("/")
            }
            else {
               res.render('users/login', { passwordError: "Correo o constraseña incorrecto", old: req.body });
            }
         }
         else {
            res.render('users/login', { passwordError: "Correo o constraseña incorrecto", old: req.body });
         }
      }
      else {
         res.render('users/login', { errors: errors.mapped(), old: req.body });
      }

   }

};

module.exports = usersController