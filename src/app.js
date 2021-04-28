const express = require('express');
const { dir, port } = require('./config');
const app = express();

app.set('port', port)
    .use(express.static(`./src/${dir}`))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(require('express-fileupload')())
    .use('/', require('./routes/index'));

module.exports = app;