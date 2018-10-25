var http = require('http');
var express = require('express');
var routes = require('./courses/index');

var app = express();
var port = 1234;
var server = http.createServer(app);

server.listen(process.env.PORT || port);
routes(app);

server.on('listening', function () {
    console.log(`listening to ${port}`);
});