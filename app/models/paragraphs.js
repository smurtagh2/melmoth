var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paragraphSchema = new Schema({
	paragraphs: [{
		text: String,
		editors_note: String,
		paragraph_id: Number,
		chapter: Number,
		tale: String
	}]
}) 

module.exports = mongoose.model('Paragraph', paragraphSchema)