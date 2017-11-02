var User = require('../models/user.model');

module.exports = {

    signinPage: (req, res) => {
        res.render('pages/login')
    },

    login: function (req, res) {

        User.findOne({ username: req.body.username, password: req.body.password })
            .exec()
            .then(function (user) {
                if (!user) res.redirect("/user/signin");
                else res.redirect("/books");
            })
            .catch(function (err) {
                res.redirect("/user/signin");
            });

    }
}