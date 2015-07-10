// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var talesSchema = new Schema({
	tales: [{
		title: String,
		description: String,
		characters: Array,
		locations: Array,
		associated_chapters: Array
	}]
})


module.exports = mongoose.model('Tales', talesSchema);