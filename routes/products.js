var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");
const multer = require('multer');
const path = require('path');

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

router.get('/productCart', productsController.shoppingCart);

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/',upload.fields([{    name: 'caratula', maxCount: 1  }, {    name: 'gallery', maxCount: 6  }]), productsController.save);
router.get('/edit', productsController.edit);
router.get('/:id', productsController.deatil);
router.put('/:id',upload.fields([{    name: 'caratula', maxCount: 1  }, {    name: 'gallery', maxCount: 6  }]), productsController.saveEdit);

//TODO CREAR DELETE

module.exports = router;