// original code gave radius attribute as "radius" instead of "r"

console.log("Linked.");
window.onload = function(){

var main = d3.select("#container")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100); 

  main.append("circle")
    .style("stroke", "gray")
    .style("fill", "cyan")
    .attr("cx", 50)
    .attr("cy",50)
    .attr("r",40);
}

