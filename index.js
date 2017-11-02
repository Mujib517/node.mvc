const express = require('express');
const hbs = require('express-hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const defaultRouter = require('./routes/default.router');
const bookRouter = require('./routes/book.router');
const userRouter = require('./routes/user.router');

const app = express();

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log("Server running on " + port));

mongoose.connection.openUri("mongodb://admin:admin@ds145019.mlab.com:45019/mybooksdb");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("lib"));
app.set('view engine', 'hbs');

app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/index.hbs',
    layoutsDir: __dirname + '/views/pages',
    partialsDir: __dirname + '/views/partials'
}));


app.use('/', defaultRouter);
app.use('/books', bookRouter);
app.use('/user', userRouter);