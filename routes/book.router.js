const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.ctrl');

router.get('/', bookCtrl.get);
router.get('/:id', bookCtrl.getById);

module.exports = router;