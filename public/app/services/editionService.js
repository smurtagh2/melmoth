angular.module('editionService', [])

.factory('Edition', function($http) {

	// create a new object
	var editionFactory = {};

	// get a single edition
	editionFactory.get = function(id) {
		return $http.get('/edition/text/' + id);
	};

	editionFactory.paragraphs = function(){
		return $http.get('/edition/paragraphs/');
	}

	// get all users
	editionFactory.all = function() {
		return $http.get('/edition/text/');
	};

	// return our entire userFactory object
	return editionFactory;

});