var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endnoteSchema = new Schema({
	which_chapter: String,
	text: String
})

module.exports = mongoose.model('Endnote', endnoteSchema)