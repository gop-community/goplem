var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8081; // process.env.PORT
var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'Goplem API OK'});
});

// Prefix all routes with /api
app.use('/api', router);

// Start the server
app.listen(port, function() {
  console.log('The Goplem server is running on port ' + port);
});

// ----------
// BASIC API
// ----------



module.exports = app;