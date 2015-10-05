/* server.js */

/* Packages = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var path 		= require('path');
var port 		= process.env.PORT || 8080;
var mongoose 	= require('mongoose');
var morgan 		= require('morgan');
var config 		= require('./config');
// var morgan 		= require('morgan');

/* App Configuration = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// app.use(morgan('dev'));


/* Mongoose = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
var db = mongoose.connection;

db.on('connecting', function() {
	console.log('connecting to MongoDB...');
});
db.on('error', function(error) {
	console.error('Error in MongoDb connection: ' + error);
	mongoose.disconnect();
});
db.once('open', function() {
	console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
	console.log('MongoDB reconnected!');
});
db.on('disconnected', function() {
	console.log('MongoDB disconnected!');
	mongoose.connect('mongodb://public:access@ds039000.mongolab.com:39000/udof', {server:{auto_reconnect:true}});
});
mongoose.connect('mongodb://public:access@ds039000.mongolab.com:39000/udof',{server:{auto_reconnect:true}})

/* Express = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

/* Website ========*/
var website = express.Router();
app.use('/',website);
// Path Directory
app.use('/', express.static(__dirname + '/public'));
console.log(__dirname + "/public/website");

website.use(function(req,res,next){
	console.log(req.method , req.url);

	next();
});
// Document Root Index
website.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/website/app/views/','index.html'));
});

/* Dashboard
======================================*/
// var dashboard = express.Router();
// app.use('/dashboard', dashboard);
// app.use('/', express.static(__dirname + "/public"));
// console.log(__dirname + "/public/dashboard");

// dashboard.use(function(req, res, next) {
//     console.log(req.method, req.url);

//     next();
// });

// Document Root Index
// dashboard.get(['/','/*'], function(req, res) {
// 	res.sendFile(path.join(__dirname + '/public/dashboard/app/views/','index.html'));

// });

/* STANDARD SETUP */
// app.use(express.static(__dirname + '/public'));

var apiRoutes = require('./app/routes/api');
app.use('/api', apiRoutes);

// var privateApiRouter = require('./app/routes/private/api');
// app.use('/privapi', privateApiRouter);


app.get('*', function(req, res) { 
    res.sendFile(path.join(__dirname + '/public/website/app/views/','index.html'));
});

/* Server = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

app.listen(port);
// http.createServer(app,admin).listen(port);
// app.listen(port);
// admin.listen(port);
console.log('The magic is happening on port' + port);

