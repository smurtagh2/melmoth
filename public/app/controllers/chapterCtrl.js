angular.module('chapterCtrl', ['editionService', 'ngSanitize'])

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

	this.tab = "1";

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    
    };
})

.filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
});