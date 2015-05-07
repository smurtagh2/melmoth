// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var editionSchema = new Schema({
	text: [{
		chapter: {
			chapter_number: String,
			chapter_title: String,
			epigraph: {
				quote: String,
				bibl: String,
			},
			paragraphs: [{
				text: String,
				editor_note: String,
				paragraph_id: String
			}]
		}
	}]
})


module.exports = mongoose.model('Edition', editionSchema);