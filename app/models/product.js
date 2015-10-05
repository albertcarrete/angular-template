var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// user schema 
var ProductSchema   = new Schema({

	name:{type:String, required: true},
	category:{type:String, required: true},
	description: {type:String, required:true},
	safename:{type:String,required:true},
	imageURL:{type:String},
	pricing:[{
		name: String,
		measurement: String,
		item_id: {type:String,index:true},
		price: String,
		weight: String,
		shipping: String,
	}]
	
},{collection: 'products'});


module.exports = mongoose.model('Product', ProductSchema);