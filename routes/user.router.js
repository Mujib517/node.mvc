const express = require('express');
const router = express.Router();
const passport = require("passport");

const userCtrl = require('../controllers/user.ctrl');

router.get('/signin', userCtrl.signinPage);
router.get('/signout', userCtrl.logout);

router.post("/signin", passport.authenticate('local-login', {
    successRedirect: '/books',
    failureRedirect: '/user/signin'
}));

module.exports = router;