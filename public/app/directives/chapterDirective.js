angular.module('chapterDir', ['editionService'])

.directive("chapter", function (Edition) {

	var controller = ('newController', function(Edition) {

 	 	var self = this;

 	 	Edition.chapters()

		  .success(function(data) {
		    self.chapters = data;
		    self.chapters.myVar = true;
		    self.chapters.toggle = function() {
		      self.chapters.myVar = !self.chapters.myVar;
		    }
		  });
	}



	template = '<tabset>
			<tab ng-repeat="doc in chapter.chapters | orderBy:\'chapter_number\'" id="{{doc.chapter_id}}" heading="{{doc.chapter_title}}">
				<h3>{{doc.chapter_title}}</h1>
				<div class="subgroup">
					<blockquote>
						<p ng-bind-html="doc.epigraph.quote"></p>
						<p>- {{ doc.epigraph.bibl }}</p>
					</blockquote>
					<div ng-repeat="para in doc.paragraphs | filter:searchText" class="row text-justify">
						<p class="para" ng-bind-html="para.text | highlight:searchText" id="{{para.paragraph_id}}"></p>
					</div>
				</div>
			</tab>
		</tabset>'
	return {
		restrict: 'E',
		scope: {
			data: '='
		}
		controller: controller,
		template: template,
	}
})