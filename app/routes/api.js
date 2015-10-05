  /* // REQUIRE PACKAGES ----------------------*/

/* models */
var Template     = require('../models/template');
var Product     = require('../models/product');


/* misc */
var express 	= require('express');
var bodyParser 	= require('body-parser'); 	
var jwt        	= require('jsonwebtoken');
var config     	= require('../../config');

// super secret for creating tokens
var superSecret = config.secret;
// module.exports = function(app, express) {
/* the express router */
var apiRouter = express.Router();

console.log("api run");

	// test route to make sure everything is working 
	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});

	apiRouter.route('/products')

		.get(function(req,res){
			Product.find({},function(err,products){
				if(err) res.send(err);
				res.json(products);
			})

		});	

	module.exports = apiRouter;

// 	return apiRouter;
// };