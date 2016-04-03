'use strict';
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');
var https = require('https');
var port = process.env.PORT || 3000;


//var router = express.Router()

//require(__dirname + '/routes/weather-routes')(router);
//app.use('/', router);
//app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});
