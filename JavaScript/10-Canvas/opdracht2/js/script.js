"use strict"

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = "rgb(79, 198, 174)";
ctx.moveTo(125, 125);
ctx.lineTo(50, 225);
ctx.lineTo(125, 325);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = "black";
ctx.moveTo(200, 75);
ctx.lineTo(200, 375);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = "rgb(79, 198, 174)";
ctx.moveTo(350, 125);
ctx.lineTo(275, 225);
ctx.lineTo(350, 325);
ctx.stroke();