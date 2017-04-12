// Config App
var express     = require('express');
var app         = express();

// Setup Router
app.use(express.static(__dirname + '/public'));

// Server
app.listen(process.env.PORT || 3002);
