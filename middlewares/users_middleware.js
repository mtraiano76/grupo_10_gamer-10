const { body } = require('express-validator');

let userValidator =
{
    validateRegister : [
        body('nombre')
            .notEmpty().withMessage('Debes completar el nombre').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
        body('apellido')
            .notEmpty().withMessage('Debes completar el apellido').bail()
            .isLength({ min: 5 }).withMessage('El apellido debe ser más largo'),
        body('email')
            .notEmpty().withMessage('Debes completar el email').bail()
            .isEmail().withMessage('Debes completar un email válido'),
        body('password')
            .notEmpty().withMessage('Debes completar la contraseña').bail()
            .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),

        body('emailConfirmation')
            .custom(async (emailConfirmation, { req }) => {
                const email = req.body.email

                if (email !== emailConfirmation) {
                    throw new Error('Los correos deben coincidir')
                }
            }),

        body('confirmPassword')
            .custom(async (confirmPassword, { req }) => {
                const password = req.body.password

                if (password !== confirmPassword) {
                    throw new Error('Las contraseñas deben coincidir')
                }
            })
    ],

    validateLogin : [
        
        body('email')
            .notEmpty().withMessage('Debes completar el email').bail()
            .isEmail().withMessage('Debes completar un email válido'),
        body('password')
            .notEmpty().withMessage('Debes completar la contraseña').bail()
            .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),
    ]
}


module.exports = userValidator