var Edition = require('../models/edition')
var Endnote = require('../models/endnote_model')
var Alt = require('../models/alt_model')
var User = require('../models/user')
var Vis = require('../models/visualisation')
var Tales = require('../models/tales')
var CompTales = require('../models/compTales')
var Paragraphs = require('../models/paragraphs')
var ChapterTitles = require('../models/chapter_titles')
var TopicModel = require('../models/topic_model')
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
			Edition.find(function(err, all_text) {
				if (err) res.send(err);
				// return the text
				res.json(all_text);
			})
		});

	/*apiRouter.route('/paragraphs')

		.get(function(req, res) {
			Edition.findOne(
				{ },
				{ paragraphs: 1 }, function(err, editions) {

				res.json(editions);
			});
		});*/

	apiRouter.route('/chapter_data')

		.get(function(req, res) {
			Edition.find({ 'chapter_type': 'chapter'}, function(err, chapters) {

				res.json(chapters);
			});
		});

	apiRouter.route('/biography_data')

		.get(function(req, res) {
			Edition.find({ 'chapter_type': 'biography'}, function(err, biography) {

				res.json(biography);
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

	apiRouter.route('/vis_data')

		.get(function(req, res) {
			Vis.find(function(err, vis) {
	
				 res.json(vis)
			});
		});

	apiRouter.route('/tales_data')

		.get(function(req, res) {
			Tales.find(function(err, tales) {
	
				 res.json(tales)
			});
		});

		
	apiRouter.route('/complete_tales')

		.get(function(req, res) {
			CompTales.find(function(err, compTales) {
	
				 res.json(compTales)
			});
		})

		.post(function(req, res) {

			var compTales = new CompTales();

			compTales.save(function(err){
				if (err) res.send(err);

				res.send('Tales created!')
			});
		});


	apiRouter.route('/paragraph_database')

		.get(function(req, res) {
			Paragraphs.find(function(err, paragraphs) {
				res.json(paragraphs)
			});
		})

		.post(function(req, res){

			var paragraphs = new Paragraphs();

			paragraphs.save(function(err){
				if (err) res.send(err);

				res.send('Paragraph created!')
			})
		})

	apiRouter.route('/chapter_titles')

		.get(function(req, res) {
			ChapterTitles.find(function(err, chapter_titles) {
				res.json(chapter_titles)
			});
		})

		.post(function(req, res){

			var chapter_titles = new ChapterTitles();

			chapter_titles.save(function(err){
				if (err) res.send(err);

				res.send('Chapter Title created!')
			})
		})

	apiRouter.route('/topic_model')

		.get(function(req, res) {
			TopicModel.find(function(err, topic_model) {
				res.json(topic_model)
			});
		})

		.post(function(req, res){

			var topic_model = new TopicModel();

			topic_model.save(function(err){
				if (err) res.send(err);

				res.send('Topic Model created!')
			})
		})

	return apiRouter;
}