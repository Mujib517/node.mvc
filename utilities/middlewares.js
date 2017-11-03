module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated())
            next();
        else res.redirect('/user/signin');
    },

    noCache: (req, res, next) => {
        res.setHeader("Cache-Control", "no-cache,no-store,must-revalidate");
        next();
    }
}



