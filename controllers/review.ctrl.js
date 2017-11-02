var Review = require('../models/review.model');

module.exports = {

    save: function (req, res) {
        var review = new Review(req.body);
        console.log(req.body);
        review.save(function (err) {
            if (!err) res.redirect("/books/"+req.body.bookId);
            else res.render("pages/error", { message: err });
        });

    }
};