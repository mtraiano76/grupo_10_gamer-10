let usersController = {
   
    login: function(req, res)
    {
       res.render('users/login');
    },

    register: function(req, res)
    {
       res.render('users/registro');
    }
    
 };
 
 module.exports = usersController