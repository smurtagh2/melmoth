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
			editors_note: String,
			summary: String,
			paragraph_id: String
		}],
		endnotes: [{
			keyword: String,
			endnote_text: String,
			endnote_id: String,
			image_url: String
		}]
	}
})


module.exports = mongoose.model('Edition', editionSchema);