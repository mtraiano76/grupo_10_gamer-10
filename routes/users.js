var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
var userValidator = require("../middlewares/users_middleware");
let session = require("../middlewares/session_middleware");

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
router.get('/login', session.not_logged, usersController.login);

router.get('/register', session.not_logged, usersController.register);
router.post('/', session.not_logged,userValidator.validateRegister, usersController.complete_register);
router.post('/login', session.not_logged,userValidator.validateLogin, usersController.complete_login);
router.get('/logout', session.logged, usersController.logout);
router.get('/all-users', usersController.api_users);
router.get('/count', usersController.api_count);
router.get('/user/:id', usersController.detail);

module.exports = router;
