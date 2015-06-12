// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visSchema = new Schema({
	nodes: [{
		name: String,
		group: Number,
		}],
	links: [{
		source: Number,
		target: Number,
		value: Number,
	}]
})


module.exports = mongoose.model('Vis', visSchema);