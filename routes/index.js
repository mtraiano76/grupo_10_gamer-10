var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.onGet);
router.get('/404', indexController.onGet404);

module.exports = router;
