const express = require('express');
const hbs = require('express-hbs');

const defaultRouter = require('./routes/default.router');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server running on " + port));

app.use(express.static("lib"));

app.set('view engine', 'hbs');

app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/index.hbs',
    layoutsDir: __dirname + '/views/pages'
}));


app.use('/', defaultRouter);