var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
var userValidator = require("../middlewares/users_middleware");

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        let  folder = path.join(__dirname, '../public/images/profile');
        callback(null, folder);
    },
    filename: (req, file, callback) => 
    {
        let imageName = req.body.name.trim() + Date.now() + path.extname(file.originalname);

        callback(null, imageName);
    }
})

const upload = multer({storage:multerDiskStorage});

/* GET users listing. */
router.get('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/',userValidator.validateRegister, usersController.complete_register);
router.post('/login',userValidator.validateLogin, usersController.complete_login);

module.exports = router;
