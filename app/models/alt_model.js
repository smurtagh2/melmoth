var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var altSchema = new Schema({
	text: {
		div: [{
			content_type: String,
			n: Number,
			head: {
				content_type: String,
				content: String,
			},
			epigraph: {
				quote: {
					l: [
							String, ref: {
							conent_type: String,
							n: String,
							content: String
					}]
				},
				bibl: String,
			},
			p: [{
				content_type: String,
				content: [
							String, ref: {
							content_type: String,
							n: String,
							content: String}
						]
			}]
		}],

	}
})

module.exports = mongoose.model('Alt', altSchema)