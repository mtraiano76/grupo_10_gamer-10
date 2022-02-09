var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");

router.get('/productCart', productsController.shoppingCart);
router.get('/create', productsController.create);
router.post('/create', productsController.save);
router.get('/', productsController.list);
router.get('/edit', productsController.edit);
router.put('/edit', productsController.saveEdit);
router.get('/productDetail', productsController.deatil);

module.exports = router;