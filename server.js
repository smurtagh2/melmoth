var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //get body-parser
var mongoose = require('mongoose'); // for working with our database
var config = require('./config'); // import config file
var path = require('path');

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
	next();
});

// connect to our database (hosted on mongolab.com)
mongoose.connect(config.database);

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// ROUTES FOR OUR API 
// ===============================================================

// API ROUTES -------------------------------------------------------
var editionRoutes = require('./app/routes/chapter.js')(app, express); // import routes/api.js file
app.use('/edition', editionRoutes);

// MAIN CATCHALL ROUTE ----------------------------------------------
// SEND USERS TO FRONTEND -------------------------------------------
// has to be registered after API ROUTES

// set up our one route to the index.html file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
});

app.get('/chapters', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/chapterPages.html'))
});

// start the local server on port 8080 (http://localhost:8080)
app.listen(config.port);
console.log('Melmoth Magic happens on port 8080.');