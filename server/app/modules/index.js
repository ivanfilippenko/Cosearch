'use strict';

var dir = require('node-dir');

var getClass = require('./getNames').getClass;
var getFunctions = require('./getNames').getFunctions;
var parenSeparator = require('./separator').parenSeparator;
var camelSeparator = require('./separator').camelSeparator;
var fs = require('fs');
var exec = require('exec');

var collectionContent = '';
var mappingData = [];

var counter = 0;

module.exports = function() {
  exec(['rm', '-rf', '/tmp/meta_runner/build/collection-inv'], function() {
    dir.readFiles('./projects', {
      encoding: 'utf8',
      match: /((.)+)\.java/i
    }, function(err, content, next) {
      if (err) throw err;
      var className = getClass(content);
      var functionNames = getFunctions(content);
      
      for (var i = 0; i < functionNames.length; i++) {
        collectionContent += camelSeparator(parenSeparator(functionNames[i].content + ' ' + className.content)) + '\n';
        mappingData.push({
          className: className.content,
          content: functionNames[i].content,
          lineNumber: functionNames[i].lineNumber,
          fileIndex: counter
        });
      }
      counter++;
      next();
    }, function(err, files) {
      for (var i = 0; i < mappingData.length; i++) {
        mappingData[i].fileName = files[mappingData[i].fileIndex];
      }
      fs.writeFileSync('/tmp/meta_runner/data/collection/collection.dat', collectionContent, 'utf-8');
      fs.writeFileSync('./public/data/mapping.json', JSON.stringify(mappingData), 'utf-8');
      if (err) throw err;
    });
  });
};