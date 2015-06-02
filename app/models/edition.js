// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var editionSchema = new Schema({
	chapter: {
		chapter_number: String,
		chapter_title: String,
		chapter_type: String,
		epigraph: {
			quote: String,
			bibl: String,
		},
		paragraphs: [{
			text: String,
			editor_note: String,
			summary: String,
			paragraph_id: String
		}]
	}
})


module.exports = mongoose.model('Edition', editionSchema);