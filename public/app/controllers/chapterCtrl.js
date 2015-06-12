angular.module('chapterCtrl', ['editionService', 'ngSanitize', 'duScroll','ui.bootstrap', 'ngAnimate'])

.controller('chapterController', function(Edition, $http){

	var self = this;

 Edition.vis_data()

    .success(function(data){
      self.vis_data = data;
    });

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

    self.username = 'Shane Murtagh';
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

.filter('test', function () {
  return function (paragraph, phrase) {
      if (phrase) paragraph = paragraph.replace(new RegExp('('+paragraph+')', 'gi'),
        '<a href="#" tooltip-placement="top" tooltip="This is a test">$1</a>')
  };
})

.filter('test', function () {
  return function (input, scope) {
      if (input === scope.test_array) input = input.replace(new RegExp('('+input+')', 'gi'),
        '<a href="#" tooltip-placement="bottom" tooltip="{{scope.test_array}}">$1</a>')
  };
})

.filter('getNote', function () {                          //http://stackoverflow.com/questions/14302267/how-to-use-a-filter-in-a-controller
    return function (input, notes) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].keywords == input) input = input.replace(new RegExp('('+input+')', 'gi'),
        '<a href="#" tooltip-placement="bottom" tooltip="{{'+notes[i].endnote_text+'}}">$1</a>')
            }
        }
})



.directive('ngTestvis', function(){
  var width = 960,
      height = 500;

  return {
    restrict: 'E',
    scope: {
      val: '='
    },
    link: function (scope, element, attrs) {
      var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json(scope, function(error, graph) {
  if (error) throw error;

  force
      scope.nodes(graph.nodes)
      scope.links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

  node.append("title")
      .text(function(d) { return d.name; });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
});
    }
  }
})
