"use strict";
console.log("Linked.");
window.onload = function() {
  function draw(data) {
    var sel = d3.select("ul").selectAll("li").data(data);
    sel.enter().append("li").text(function(d) {
      return (d.title + " (" + d.view_count + ")");
    });
  }
  var screencasts = [];
  d3.json('http://tagtree.tv/feed.json'), function(data) {
    d3.select('#container').append("ul");
    screencasts = data.sort(function(a, b) {
      return b.view_count - a.view_count;
    });
    draw(screencasts);
  };
};
