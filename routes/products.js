var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");
const multer = require('multer');
const path = require('path');
let session = require("../middlewares/session_middleware");
let role = require("../middlewares/rol_middleware");
var productValidator = require("../middlewares/product_middleware");

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/Imágenes de Juegos PS4');
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imageName = req.body.name.trim() + Date.now() + path.extname(file.originalname);

        callback(null, imageName);
    }
})

const upload = multer({ storage: multerDiskStorage });

router.get('/productCart', session.logged, productsController.shoppingCart);

router.get('/', productsController.list);
router.get('/create', session.logged, role.admin, productsController.create);
router.post('/', session.logged, role.admin, upload.fields([{ name: 'caratula', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), productValidator.validateRegister, productsController.save);
router.get('/edit', session.logged, role.admin, productsController.edit);
router.get('/:id', productsController.deatil);
router.put('/:id', session.logged, role.admin, upload.fields([{ name: 'caratula', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]),  productValidator.validateRegister, productsController.saveEdit);
router.delete('/:id', session.logged, role.admin, productsController.delete);

module.exports = router;