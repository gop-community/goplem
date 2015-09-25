var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../config/config.json');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'Goplem API OK'});
});

// Prefix all routes with /api
app.use('/api', router);

// -------------------
// DATABASE CONNECTION
// -------------------
mongoose.connect(['mongodb:/', config.databases.mongo.address, config.databases.mongo.name].join('/'));

// ---------
// BASIC API
// ---------

module.exports = app;