var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js");
const multer = require('multer');
const path = require('path');

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        let  folder = path.join(__dirname, '../public/images/Imágenes de Juegos PS4');
        console.log(folder);
        callback(null, folder);
    },
    filename: (req, file, callback) => 
    {
        let imageName = req.body.name.trim() + Date.now() + path.extname(file.originalname);
        console.log(imageName);

        callback(null, imageName);
    }
})

const upload = multer({storage:multerDiskStorage});

router.get('/productCart', productsController.shoppingCart);
router.get('/create', productsController.create);

router.post('/',upload.fields([{    name: 'caratula', maxCount: 1  }, {    name: 'gallery', maxCount: 6  }]), productsController.save);
router.get('/', productsController.list);

router.get('/edit', productsController.edit);
router.put('/', productsController.saveEdit);
router.get('/:id', productsController.deatil);

module.exports = router;