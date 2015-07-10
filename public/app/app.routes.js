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

	.when('/about', {
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
		templateUrl : 'app/views/tales-view.html',
		controller: 'chapterController as chapter'
	})


	// get rid of the hash in the URL
	$locationProvider.html5Mode(true);
	
});