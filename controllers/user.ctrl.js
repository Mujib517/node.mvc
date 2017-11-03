var User = require('../models/user.model');

module.exports = {

    signinPage: (req, res) => {
        res.render('pages/login')
    },

    login: function (username, password, done) {

        User.findOne({ username: username, password: password })
            .exec()
            .then(function (user) {
                if (user) done(null, user);
                else done("Invalid username or password");
            })
            .catch(function (err) {
                done("Invalid username or password" + err);
            });
    },

    logout: (req, res) => {
        req.logout();
        res.redirect("/user/signin");
    }
}