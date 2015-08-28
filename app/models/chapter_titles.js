var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chapterTitlesSchema = new Schema({
	chapters: [{
		title: String,
		chapter_number: Number,
		epigraph: {
			quote: String,
			bibl: String
		}
	}]
}) 

module.exports = mongoose.model('ChapterTitles', chapterTitlesSchema)