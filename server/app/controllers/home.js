var express = require('express'),
  path = require('path'),
  request = require('request'),
  router = express.Router();

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Cosearch'
  });
});
