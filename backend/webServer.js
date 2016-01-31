'use strict';

var express    = require('express');
var path       = require('path');
var app        = express();
var listenPort = 8080;


// Serve static file
app.use(express.static(__dirname + "/../dist/public/"));

// Default Route
app.get('/', function(req, res){
    res.sendFile(path.join (__dirname, '..', 'dist/index.html'));
});

// Bad url
app.use(function(req, res) {
    res.sendFile(path.join (__dirname, '..', 'dist/error.html'));
});

// Application Entrypoint
var server = app.listen(listenPort, function () {
  console.log('application loaded on port:' + listenPort);
});

module.exports = server;
