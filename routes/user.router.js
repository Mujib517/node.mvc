const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.ctrl');

router.get('/signin', userCtrl.signinPage);
router.post('/signin', userCtrl.login);
router.get('/signout', (req, res) => res.render('pages/about'));

module.exports = router;