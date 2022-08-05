const express = require('express');
const app = express();

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const controller = require('../controllers/delete.controller');

app.delete('/delete', controller.delete);

module.exports = app;