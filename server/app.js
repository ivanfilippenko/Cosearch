var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  config;

var app = express();

require('./config/express')(app, config);

// start the web server
var server = app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});

module.exports = server;