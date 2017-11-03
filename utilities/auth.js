const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const userCtrl = require('../controllers/user.ctrl');

function Auth(app) {
    app.use(session({ secret: 'secret' }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user.username); //passport i m done
    });

    passport.deserializeUser(function (username, done) {
        //db call 
        done(null, username);
    });

    passport.use('local-login', new LocalStrategy(function (username, password, done) {
        userCtrl.login(username, password, done);
    }));
}

module.exports = Auth;
