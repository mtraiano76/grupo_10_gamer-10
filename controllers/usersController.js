const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
let usersPath = path.join(__dirname, '../data/users.json');
let bcrypt = require('bcryptjs');

const context = require('../database/models')
const { Op } = require("sequelize");

let usersController = {

   login: function (req, res) {
      res.render('users/login', { 'returnUrl': req.query.returnUrl });
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

      console.log(req);
      console.log(req.body);

      if (errors.isEmpty()) {
         let request = req.body;
         console.log(request);

         context.User.findOne({
            where: { email: request.email }
         }).then((resultado) => {
            if (resultado) {
               console.log('------------------------------------------usuario existente-----------------------------------------------------------')
               res.render('users/registro', { error: 'Ya existe un usuario con este correo', old: req.body });
            }
            else
            {
               console.log('------------------------------------------creando usuario-----------------------------------------------------------')
               context.User.create(
                  {
                     name: request.nombre,
                     lastName: request.apellido,
                     email: request.email,
                     password: bcrypt.hashSync(request.password, 10),
                  }).then((resultado) => {
                     console.log(resultado);
                     res.redirect("/users/login")
                  }).catch(function (err) {
                     console.log(err);
                     res.render('users/registro', { errors: errors.mapped(), old: req.body });
                  });
            }
         }).catch(function (err) {
            console.log(err);
            res.render('users/registro', { error: 'Error creando la cuenta, por favor vuelva a intentarlo', old: req.body });
         });
      }
      else {
         res.render('users/registro', { errors: errors.mapped(), old: req.body });
      }
   },

   complete_login: function (req, res) {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
         let request = req.body;
         console.log(request);
         context.User.findOne({
            where: { email: request.email }
         }).then((resultado) => {
            if (resultado) {
               console.log(resultado);
               let match = bcrypt.compareSync(request.password, resultado.dataValues.password);
               if (match) {
                  console.log("loggeado", resultado.dataValues)
                  req.session.user = resultado.dataValues.email;
                  req.session.rol = resultado.dataValues.userType;
                  console.log(req.params);
                  res.redirect('..'+request.returnUrl)
               }
               else {
                  res.render('users/login', { passwordError: "Correo o constraseña incorrecto", old: req.body });
               }
            }
            else {
               res.render('users/login', { passwordError: "Correo o constraseña incorrecto", old: req.body });
            }

         }).catch(function (err) {
            console.log(err);
            res.render('users/login', { passwordError: "Correo o constraseña incorrecto", old: req.body });
         });
      }
      else {
         res.render('users/login', { errors: errors.mapped(), old: req.body });
      }

   }

};

module.exports = usersController