angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/', {
		templateUrl : 'app/views/homepage.html',
	})

	.when('/chapters', {
		templateUrl : 'app/views/chapters.html',
		controller: 'chapterController as chapter'
	})

	.when('/biography', {
		templateUrl : 'app/views/biography.html',
		controller: 'chapterController as chapter'
	})

	.when('/literary-context', {
		templateUrl : 'app/views/about.html',
		controller: 'chapterController as chapter'
	})
	
	.when('/endnotes', {
		templateUrl : 'app/views/endnotes.html',
		controller: 'chapterController as chapter'
	})

	.when('/chapters-scroll', {
		templateUrl : 'app/views/chapters2.html',
		controller: 'chapterController as chapter'
	})

	.when('/introduction', {
		templateUrl : 'app/views/introduction.html',
		controller: 'chapterController as chapter'
	})
	
	.when('/publication', {
		templateUrl : 'app/views/publication.html',
		controller: 'chapterController as chapter'
	})	

	.when('/tales', {
		templateUrl : 'app/views/tales-local.html',
		controller: 'chapterController as chapter'
	})

	.when('/chapter_test', {
		templateUrl : 'app/views/chapter_test.html',
		controller: 'chapterController as chapter'
	})

	.when('/tales_test', {
		templateUrl : 'app/views/tales_test.html',
		controller: 'chapterController as chapter'
	})

	.when('/thematic', {
		templateUrl : 'app/views/thematic.html',
		controller: 'chapterController as chapter'
	})

	.when('/paratexts', {
		templateUrl : 'app/views/paratexts.html',
		controller: 'chapterController as chapter'
	})

	.when('/topic-model', {
		templateUrl : 'app/views/topic-model.html',
		controller: 'chapterController as chapter'
	})

	.when('/tales-topic-model', {
		templateUrl : 'app/views/tales-topic-model.html',
		controller: 'chapterController as chapter'
	})

	.when('/ireland-topic-model', {
		templateUrl : 'app/views/ireland-topic-model.html',
		controller: 'chapterController as chapter'
	})

	.when('/tales-desc', {
		templateUrl : 'app/views/tales-desc.html',
		controller: 'chapterController as chapter'
	})

	.when('/tales-topic-data', {
		templateUrl : 'app/views/tales-topic-data.html',
		controller: 'chapterController as chapter'
	})

	.when('/irish6-topic-data', {
		templateUrl : 'app/views/irish6-topic-data.html',
		controller: 'chapterController as chapter'
	})

	.when('/irish20-topic-model', {
		templateUrl : 'app/views/irish20-topic-model.html',
		controller: 'chapterController as chapter'
	})

	.when('/word-cloud', {
		templateUrl : 'app/views/word-cloud.html',
		controller: 'chapterController as chapter'
	})

	.when('/ireland-graph', {
		templateUrl : 'app/views/ireland-graph.html',
		controller: 'chapterController as chapter'
	})

	.when('/gothic-topic-model', {
		templateUrl : 'app/views/gothic-topic-model.html',
		controller: 'chapterController as chapter'
	})

	.when('/downloads', {
		templateUrl : 'app/views/downloads.html',
		controller: 'chapterController as chapter'
	})

	.when('/tales-local', {
		templateUrl : 'app/views/tales-local.html',
		controller: 'chapterController as chapter'
	})

	// get rid of the hash in the URL
	$locationProvider.html5Mode(true);
	
});