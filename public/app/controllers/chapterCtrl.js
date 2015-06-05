angular.module('chapterCtrl', ['editionService', 'ngSanitize', 'duScroll','ui.bootstrap', 'ngAnimate'])

.controller('chapterController', function(Edition){

	var self = this;

	Edition.all()

		.success(function(data){
			self.editions = data;
		});

	Edition.paragraphs()

		.success(function(data){
			self.paragraphs = data;
		});

  Edition.chapters()

    .success(function(data){
      self.chapters = data;
      self.chapters.myVar = true;
      self.chapters.toggle = function() {
        self.chapters.myVar = !self.chapters.myVar;
      }
    });

  Edition.biography()

    .success(function(data){
      self.biography = data;
    });

  Edition.endnotes()

    .success(function(data){
      self.endnotes = data;
      self.keywords = data.keyword;
    })

})

.filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
})

.filter('red', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<a href="#" tooltip-placement="top" tooltip="This is a test">$1</a>')

      return $sce.trustAsHtml(text)
    }
})

.directive('ngEndnote', function(){
  return {
    restrict: 'E',
    scope:{
      endnoteInfo: '=info'
    },
    template: 'Keyword: {{endnoteInfo.keyword}}'
  }
});