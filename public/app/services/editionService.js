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

/* editionFactory.something = function() {

		var paragraph_array = [$http.get('/edition/paragraphs/')];

		var array_length = paragraph_array.length;

		var empty_array = [];

		for(i = 0; i < array_length; i++)
			if (typeof paragraph_array[i] == 'string')
				empty_array.push(paragraph_array[i]);

		return paragraph_array;
	}; */