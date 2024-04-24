"use strict"


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// outer ring and fill 
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "maroon";
ctx.arc(200, 200, 25, 0, (2*Math.PI))
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// center dot
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "maroon";
ctx.arc(200, 200, 5, 0, (2*Math.PI) )
ctx.fillStyle = "maroon";
ctx.fill();
ctx.stroke();

// top right line
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "coral"
ctx.moveTo(225, 25)
ctx.arcTo(375, 25, 375, 70, 50);
ctx.lineTo(375, 175);
ctx.stroke()

// top left line
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "coral"
ctx.moveTo(175, 25)
ctx.arcTo(25, 25, 25, 70, 50);
ctx.lineTo(25, 175);
ctx.stroke()

// bottom left line
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "coral"
ctx.moveTo(225, 375)
ctx.arcTo(375, 375, 375, 70, 50);
ctx.lineTo(375, 225);
ctx.stroke()

// bottom right line
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "coral"
ctx.moveTo(175, 375)
ctx.arcTo(25, 375, 25, 70, 50);
ctx.lineTo(25, 225);
ctx.stroke()