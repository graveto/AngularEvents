var express = require('express');
var path = require('path');

var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + "/app"));

app.listen(3333);

console.log("Server is running on port 3333");
