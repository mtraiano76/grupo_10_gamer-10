let rolVerify =
{
    admin: function (req, res, next) {
        if (req.session.rol && req.session.rol === 'ADMIN') {
            next();
        }
        else {
            res.redirect("/")
        }
    },
}


module.exports = rolVerify;