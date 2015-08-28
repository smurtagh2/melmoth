angular.module('editionService', [])

.factory('Edition', function($http) {

	// create a new object
	var editionFactory = {};

	editionFactory.get = function(id) {
		return $http.get('/edition/text/' + id);
	};

	editionFactory.paragraphs = function(){
		return $http.get('/edition/paragraphs/');
	}

	editionFactory.all = function() {
		return $http.get('/edition/text/');
	};

	editionFactory.chapters = function() {
		return $http.get('edition/chapter_data')
	}

	editionFactory.biography = function() {
		return $http.get('edition/biography_data')
	}

	editionFactory.endnotes = function() {
		return $http.get('edition/endnotes')
	}

	editionFactory.vis_data = function() {
		return $http.get('edition/vis_data')
	}

	editionFactory.tales_data = function() {
		return $http.get('edition/tales_data')
	}

	editionFactory.compTales = function() {
		return $http.get('edition/complete_tales')
	}

	editionFactory.paragraph_database = function() {
		return $http.get('edition/paragraph_database')
	}

	editionFactory.chapter_titles = function() {
		return $http.get('edition/chapter_titles')
	}

	// return entire userFactory object
	return editionFactory;

});