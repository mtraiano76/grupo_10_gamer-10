let sessionVerify =
{
    logged: function (req, res, next) {
        if (req.session.user) {
            next();
        }
        else {
            res.redirect("../users/login")
        }
    },

    not_logged: function (req, res, next) {
        //Verificar como dejar en la pagina de la que viene la petición
        if (req.session.user) {
            res.redirect("../")
        }
        else {
            next();
        }
    }
}


module.exports = sessionVerify;