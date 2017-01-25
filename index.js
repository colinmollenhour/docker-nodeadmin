var express = require('express');
var app = express();
 
var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app, process.env.PORT || 4040));
app.listen(process.env.PORT || 4040);

module.exports = app;
