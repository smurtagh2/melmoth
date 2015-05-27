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
					l: [Schema.Types.Mixed]
				},
				bibl: String,
			},
			p: [{
				content_type: String,
				content: [Schema.Types.Mixed]
			}]
		}],

	}
})

module.exports = mongoose.model('Alt', altSchema)