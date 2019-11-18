const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/wiki/index');
const mongoose = require('mongoose')

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/wiki')
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection ERROR ${err}`)
    process.exit(-1)
})
// view engine setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000

app.use('/wiki/', router);

app.listen(port);
console.log(`listen on port ${port}`);

