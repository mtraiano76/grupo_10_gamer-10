var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");
const multer = require('multer');
const path = require('path');
let session = require("../middlewares/session_middleware");

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        let  folder = path.join(__dirname, '../public/images/Imágenes de Juegos PS4');
        callback(null, folder);
    },
    filename: (req, file, callback) => 
    {
        let imageName = req.body.name.trim() + Date.now() + path.extname(file.originalname);

        callback(null, imageName);
    }
})

const upload = multer({storage:multerDiskStorage});

router.get('/productCart', session.logged, productsController.shoppingCart);

router.get('/', productsController.list);
router.get('/create', session.logged, productsController.create);
router.post('/', session.logged,upload.fields([{    name: 'caratula', maxCount: 1  }, {    name: 'gallery', maxCount: 6  }]), productsController.save);
router.get('/edit', session.logged, productsController.edit);
router.get('/:id', productsController.deatil);
router.put('/:id', session.logged,upload.fields([{    name: 'caratula', maxCount: 1  }, {    name: 'gallery', maxCount: 6  }]), productsController.saveEdit);
router.delete('/:id', session.logged, productsController.delete);

//TODO CREAR DELETE

module.exports = router;