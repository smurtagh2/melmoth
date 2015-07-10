// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compTalesSchema = new Schema({
		title: String,
		paragraphs: [{
			text: String,
	}]
})


module.exports = mongoose.model('compTales', compTalesSchema);