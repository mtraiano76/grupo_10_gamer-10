var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");

router.get('/productCart', productsController.shoppingCart);
router.get('/create', productsController.create);
router.post('/', productsController.save);
router.get('/', productsController.list);
router.get('/edit', productsController.edit);
router.put('/', productsController.saveEdit);
router.get('/:id', productsController.deatil);

module.exports = router;