var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// user schema 
var TemplateSchema   = new Schema({

	name:{type:String, required: true},
	category:{type:String, required: true}
	
},{collection: 'templates'});

module.exports = mongoose.model('Template', TemplateSchema);