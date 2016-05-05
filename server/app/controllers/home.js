var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  request = require('request'),
  search = require('../modules/search.js'),
  router = express.Router();

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Cosearch'
  });
});

router.get('/api/search/:keyword', function(req, res) {
  var query = decodeURIComponent(req.params.keyword);
  
  search(query, function(jsonSearchResults) {
    res.json(jsonSearchResults);
  });
});

router.get('/api/file/:path', function(req, res) {
  fs.readFile(decodeURIComponent(req.params.path), 'UTF-8', function(err, data) {
    if (err) {
      return res.status(500).send('wrong path');
    }
    res.send(data);
  });
});
