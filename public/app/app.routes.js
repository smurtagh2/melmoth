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

	// get rid of the hash in the URL
	$locationProvider.html5Mode(true);
	
});