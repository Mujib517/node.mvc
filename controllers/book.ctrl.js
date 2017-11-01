const Book = require('../models/book.model');
const Review = require('../models/book.model');
const moment = require('moment');

module.exports = {

    get: (req, res) => {
        Book.find()
            .sort('-lastUpdated')
            .exec()
            .then(function (books) {

                var jsonBooks = [];

                books.forEach((book) => {
                    var jsonBook=book.toJSON();
                    jsonBook.relativeTime = moment(book.lastUpdated).fromNow();
                    jsonBooks.push(jsonBook);
                });

                res.render("pages/books", { books: jsonBooks });
            })
            .catch(function (err) {
                res.render("pages/error", { message: err });
            });
    },

    getById: (req, res) => {

        var id = req.params.id;
        Book.findById(id)
            .exec()
            .then(function (book) {
                var jsonBook = book.toJSON();

                Review.find({ bookId: jsonBook._id.toString() })
                    .exec()
                    .then(function (reviews) {

                        jsonBook.lastUpdated = moment(jsonBook.lastUpdated).fromNow();

                        jsonBook.reviews = reviews;

                        res.render("pages/book-detail", { book: jsonBook });
                    });


            })
            .catch(function (err) {
                res.render("pages/error", { message: err });
            });
    },

    new: (req, res) => {
        res.render("pages/new-book");
    },

    save: (req, res) => {
        var book = new Book(req.body);

        book.save(function (err) {
            if (!err) res.redirect('/books'); //route
            else res.render("pages/error"); //page
        });
    }
}