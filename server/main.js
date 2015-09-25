import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import configUrl from './config/config.json';
import mongoose from 'mongoose';
import router from'./router';

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Prefix all routes with /api
app.use('/api', router);

router.get('/', function(req, res) {
  res.json({message: 'Goplem API OK'});
});

var port = 8081; // process.env.PORT

// -------------------
// DATABASE CONNECTION
// -------------------
var config = JSON.parse(fs.readFileSync('webpack/dist/' + configUrl, 'utf8'));

mongoose.connect(['mongodb:/', config.databases.mongo.address, config.databases.mongo.name].join('/'));

// Start the server
app.listen(port, function() {
  console.log('The Goplem server is running on port ' + port);
});

// ---------
// BASIC API
// ---------

export default app;