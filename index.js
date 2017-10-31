const express = require('express');
const hbs = require('express-hbs');
const mongoose = require('mongoose');

const defaultRouter = require('./routes/default.router');
const bookRouter = require('./routes/book.router');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server running on " + port));

mongoose.connection.openUri("mongodb://admin:admin@ds145019.mlab.com:45019/mybooksdb");


app.use(express.static("lib"));
app.set('view engine', 'hbs');

app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/index.hbs',
    layoutsDir: __dirname + '/views/pages',
    partialsDir: __dirname + '/views/partials'
}));


app.use('/', defaultRouter);
app.use('/books', bookRouter);