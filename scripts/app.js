// original code gave radius attribute as "radius" instead of "r"

console.log("Linked.");
window.onload = function(){

  function draw(data){
    var sel = d3.select("ul")
      .selectAll("li")
      .data(data);
    sel
      .enter()
      .append("li")
      .text((d)=>
        `${d.title} (${d.view_count})`);
  }

  var screencasts = [];
  d3.json('http://tagtree.tv/feed.json'), (data) => {
    d3.select('#container')
      .append("ul");

    screencasts = data.sort((a,b)=>
      b.view_count - a.view_count);

    draw(screencasts);
  }



}

