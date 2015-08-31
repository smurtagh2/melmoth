var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicModelSchema = new Schema({
	nodes: [{
		name: String,
		group: Number,
	}],
	links: [{
		source: Number,
		target: Number,
		weight: Number
	}]
})


module.exports = mongoose.model('TopicModel', topicModelSchema);