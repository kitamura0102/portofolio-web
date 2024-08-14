// Initiate a canvas instance
var canvas = new fabric.Canvas("canvas");
var circle = new fabric.Circle({
   left: 115,
   top: 100,
   fill: "white",
   radius: 50,
   stroke: "black",
   strokeWidth: 5,
   hoverCursor: "text"
});

// Adding it to the canvas
canvas.add(circle);
canvas.setWidth(document.body.scrollWidth);
canvas.setHeight(250);