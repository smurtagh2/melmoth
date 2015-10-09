angular.module('chapterCtrl', ['editionService', 'ngSanitize', 'duScroll', 'ui.bootstrap', 'ngAnimate'])

.controller('chapterController', function(Edition, $http) {

  var self = this;

  $http.get('intro.json').success(function(data) {
    self.intro = data;
  });

  $http.get('topic_model_one.json').success(function(data) {
    self.topics = data;
  });


  Edition.chapter_titles()

  .success(function(data) {
    self.chapter_titles = data;
  })

  Edition.paragraph_database()

  .success(function(data) {
    self.paragraph_database = data;
  })

  Edition.compTales()

  .success(function(data) {
    self.complete_tales = data;
  })


  Edition.tales_data()

  .success(function(data) {
    self.tales_data = data;
  });

  Edition.vis_data()

  .success(function(data) {
    self.vis_data = data;
  });

  Edition.all()

  .success(function(data) {
    self.editions = data;
  });

  Edition.paragraphs()

  .success(function(data) {
    self.paragraphs = data;
  });

  Edition.chapters()

  .success(function(data) {
    self.chapters = data;
    self.chapters.myVar = true;
    self.chapters.toggle = function() {
      self.chapters.myVar = !self.chapters.myVar;
    }
  });


  Edition.biography()

  .success(function(data) {
    self.biography = data;
  });

  Edition.endnotes()

  .success(function(data) {
    self.endnotes = data;
    self.keywords = data.keyword;
  })

  self.username = 'Shane Murtagh';
})

.filter('highlight', function($sce) {
  return function(text, phrase) {
    if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
      '<span class="highlighted">$1</span>')

    return $sce.trustAsHtml(text)
  }
})

.directive( 'crD3Bars', [
  function () {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function (scope, element) {
        var width = 1200,
    height = 800;

var color = d3.scale.category20();

var force = d3.layout.force()
   .linkStrength(0.9)
    .friction(0.9)
    .linkDistance(100)
    .charge(-200)
    .gravity(0.1)
    .theta(0.8)
    .alpha(0.1)
    .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);



        //Render graph based on 'data'
        scope.render = function(data) {

  force
      .nodes(data.nodes)
      .links(data.links)
      .start();

  var link = svg.selectAll(".link")
      .data(data.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag);
node.append("circle")
    .attr("r", 8)
    .style("fill", function (d) {
    return color(d.group);
})

node.append("text")
      .attr("dx", 10)
      .attr("dy", ".35em")
      .text(function(d) { return d.name })
      .style("stroke", "gray");

//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
force.on("tick", function () {
    link.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
        return d.source.y;
    })
        .attr("x2", function (d) {
        return d.target.x;
    })
        .attr("y2", function (d) {
        return d.target.y;
    });
    d3.selectAll("circle").attr("cx", function (d) {
        return d.x;
    })
        .attr("cy", function (d) {
        return d.y;
    });
    d3.selectAll("text").attr("x", function (d) {
        return d.x;
    })
        .attr("y", function (d) {
        return d.y;
    });
});
}
 
         //Watch 'data' and run scope.render(newVal) whenever it changes
         //Use true for 'objectEquality' property so comparisons are done on equality and not reference
          scope.$watch('data', function(){
              scope.render(scope.data);
          }, true);  
        }
    };
}
]);

