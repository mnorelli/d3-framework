function draw(data){
  d3.select("#main")
    .append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("cx", 50)
    .attr("cy",52)
    .attr("radius",50);
}

draw();