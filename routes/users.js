var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController");

/* GET users listing. */
router.get('/login', usersController.login);

router.get('/register', usersController.register);

module.exports = router;
