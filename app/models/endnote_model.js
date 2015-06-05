var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endnoteSchema = new Schema({
	endnotes: [{
		keyword: String,
		endnote_text: String,
		endnote_id: String,
		image_url: String
	}]
})

module.exports = mongoose.model('Endnote', endnoteSchema)