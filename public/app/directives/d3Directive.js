angular.module('d3Dir', [])

.controller('vizController', function(Edition, $http) {

  var self = this;

  $http.get('miserables.json').success(function(data) {
    self.viz_data = data;
  });

  $http.get('melmoth-tree.json').success(function(data) {
    self.tree_data = data;
  });
})

.directive( 'd3Directive', [
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
   .linkStrength(1)
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


var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
    return  d.name + "";
})
svg.call(tip);
 
        //Render graph based on 'data'
        scope.render = function(graph) {

  var nodes = graph.nodes
  var links = graph.links

  force
      .nodes(nodes)
      .links(links)
      .start();

  var link = svg.selectAll(".link")
      .data(links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag);
node.append("circle")
    .attr("r", 8)
    .style("fill", function (d) {
    return color(d.group);
})

    .call(force.drag)
 .on('mouseover', tip.show) //Added
 .on('mouseout', tip.hide); //Added 

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
              scope.render(scope);
          }, true); 
        }
    };
  }
]);