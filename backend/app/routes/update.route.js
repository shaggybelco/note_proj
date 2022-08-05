const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const controller = require('../controllers/update.controller');

app.put('/update', controller.update);

module.exports = app;