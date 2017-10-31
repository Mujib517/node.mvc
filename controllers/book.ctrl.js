const Book = require('../models/book.model');

module.exports = {

    get: (req, res) => {
        Book.find()
            .exec()
            .then(function (books) {
                res.render("pages/books", { books: books });
            })
            .catch(function (err) {
                res.render("pages/error");
            });
    },

    getById: (req, res) => {

        var id = req.params.id;
        Book.findById(id)
            .exec()
            .then(function (book) {
                res.render("pages/book-detail", { book: book });
            })
            .catch(function (err) {
                res.render("pages/error", { message: err });
            });
    }
}