const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.ctrl');
const reviewCtrl = require('../controllers/review.ctrl');

router.get('/', bookCtrl.get);
router.get('/new', bookCtrl.new);
router.post('/new', bookCtrl.save);
router.get('/:id', bookCtrl.getById);
router.post("/delete/:id", bookCtrl.delete);
router.post('/reviews/new', reviewCtrl.save);


module.exports = router;