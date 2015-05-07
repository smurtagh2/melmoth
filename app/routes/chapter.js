var Edition = require('../models/edition')
var Endnote = require('../models/endnote_model')
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


	// USER ROUTES ==========================================================================

	// route to authenicate a user (accessed at POST http://localhost:8080/api/authenticate)
	apiRouter.post('/authenticate', function(req, res){
		console.log(req.body.username);

		// find the user
		// select the password explicitly since mongoose is not returning it by default
		User.findOne({
			username: req.body.username
		}).select('password').exec(function(err, user) {

			if (err) throw err;

			// no user with that username was found
			if (!user) {
				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});
			} else if (user){

				// check if password matches
				var validPassword = user.comparePassword(req.body.password);
				if (!validPassword){
					res.json({
						success: false,
						message: 'Authentication failed. Wrong password'
					});
				} else {

					// if user is found and password is right
					// create a token
					var token = jwt.sign( user, superSecret, { 
						expiresInMinutes: 1440 // expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}
			}
		});
	});


	

	// on routes that end in /users
	// ------------------------------------------------------------------
	apiRouter.route('/users')

		// create a user (accessed at POST http://localhost:8080/api/users)

		.post(function(req, res){

			// create a new instance of the User model
			var user = new User();

			// set the user's information (comes from the request)
			user.name = req.body.name;
			user.username = req.body.username;
			user.password = req.body.password;

			// save the user and check for errors

			user.save(function(err){
				if (err) res.send(err);

				// return a message
				res.json({ message: 'User created!'})
			});
		})

		// get all the users (accessed at GET http://localhost:8080/api/users)
		.get(function(req, res){
			User.find(function(err, users){
				if (err) res.send(err);

				// return the users
				res.json(users);
			})
		});

	// on routes that end in /users/:user_id
	// ------------------------------------------------------------------

	apiRouter.route('/users/:user_id')

		// get the user with that id
		.get(function(req, res) {
			User.findById(req.params.user_id, function(err, users) {
				if (err) res.send(err);

				// return the users
				res.json(users);
			});
		})

		// update the use with this id
		// (accessed at PUT (accessed at GET http://localhost:8080/api/users)

		.put(function(req, res){

			// use our user model to find the user we want
			User.findById(req.params.user_id, function(err, user){
				if (err) res.send(err);

				// update the user's info only if its new

				if (req.body.name) user.name = req.body.name;
				if (req.body.username) user.username = req.body.username;
				if (req.body.password) user.password = req.body.password;

				// save the user
				user.save(function(err){
					if (err) res.send(err);

					// return a message
					res.json({ message: 'User updated!'})
				});
			});
		})

		// delete the user with this id

		.delete(function(req, res){
			User.remove({
				_id: req.params.user_id }, function(err, user){
					if (err) res.send(err);

					res.json({message: 'Successfully deleted!'})
				});
		});


	return apiRouter;
}