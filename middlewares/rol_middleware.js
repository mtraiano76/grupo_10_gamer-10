let rolVerify =
{
    admin: function (req, res, next) {
        console.log('-------------------------------------middleware----------------------------------------------');

        console.log(req.session.rol);
        if (req.session.rol && req.session.rol == 'ADMIN') {
            next();
        }
        else {
            console.log('-------------------------------------failed-middleware----------------------------------------------')
            console.log(req.session.rol);
            res.redirect("/")
        }
    },
}


module.exports = rolVerify;