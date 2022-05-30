const { body } = require('express-validator');

let productValidator =
{
    validateRegister: [
        body('name')
            .notEmpty().withMessage('Debes completar el nombre').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
        body('price')
            .notEmpty().withMessage('Debes completar el precio').bail()
            .isInt({ min: 1 }).withMessage('El precio no puede ser 0'),
        body('desarrolladora')
            .isInt({ min: 1 }).withMessage('Debes seleccionar una desarrolladora'),
        body('productora')
            .isInt({ min: 1 }).withMessage('Debes seleccionar una productora'),
        body('juagdores')
            .notEmpty().withMessage('Debes completar la cantidad de jugadores').bail()
            .isInt({ min: 1 }).withMessage('El numero de jugadores no puede ser 0'),
        body('idioma')
            .isInt({ min: 1 }).withMessage('Debes seleccionar un idioma'),
        body('discount')
            .notEmpty().withMessage('Debes completar el descuento').bail()
            .isInt({ min: 0, max: 100 }).withMessage('El descuento no puede ser menor 0 ni mayor que 100 '),
        body('category')
            .isInt({ min: 1 }).withMessage('Debes seleccionar una categoria'),
        body('date')
            .notEmpty().withMessage('Debes completar la fecha').bail()
            .isDate().withMessage('Debes completar una fecha válida'),
        body('videoUrl')
            .notEmpty().withMessage('Debes completar la url del video').bail(),
        body('descripcion')
            .notEmpty().withMessage('Debes- completar la descripción').bail()
            .isLength({ min: 5 }).withMessage('La descripción debe ser más larga'),
    ],
}


module.exports = productValidator