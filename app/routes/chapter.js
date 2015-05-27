var Edition = require('../models/edition')
var Endnote = require('../models/endnote_model')
var Alt = require('../models/alt_model')
var User = require('../models/user')
var config = require('../../config')

module.exports = function(app, express) {
	// get an instance of the express router
	var apiRouter = express.Router();

	apiRouter.get('/', function(req, res) {
		res.json({
			message: 'hooray! welcome to our edition!'
		});
	});

	apiRouter.route('/text')

	.get(function(req, res) {
		Edition.find(function(err, chapters) {
			if (err) res.send(err);
			// return the text
			res.json(chapters);
		})
	})

	apiRouter.route('/paragraphs')

		.get(function(req, res) {
			Edition.findOne(
				{ },
				{ paragraphs: 1 }, function(err, editions) {

				res.json(editions);
			});
		});


	apiRouter.route('/endnotes')

		.get(function(req, res) {
			Endnote.find(function(err, endnote) {
	
				 res.json(endnote)
			});
		})

		.post(function(req, res) {

			var endnote = new Endnote();

			endnote.which_chapter = req.body.which_chapter;
			endnote.text = req.body.text;

			endnote.save(function(err){
				if (err) res.send(err);

				res.send('Endnote created!')
			});
		});

	return apiRouter;
}