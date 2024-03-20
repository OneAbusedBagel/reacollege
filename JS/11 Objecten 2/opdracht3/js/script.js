"use strict"


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gradient = ctx.createLinearGradient(50, 120, 150, 50);
gradient.addColorStop(0, "yellow");
gradient.addColorStop(0.5, "white");
gradient.addColorStop(1, "yellow");

ctx.fillStyle = gradient;


ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(206, 165, 0)";
ctx.moveTo(225, 175);
ctx.lineTo(125, 175);
ctx.lineTo(225, 25);
ctx.lineTo(325, 175);
ctx.lineTo(225, 175);

ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(206, 165, 0)";
ctx.moveTo(125, 340);
ctx.lineTo(15 , 340);
ctx.lineTo(115, 190);
ctx.lineTo(215, 340);
ctx.lineTo(125, 340);

ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(206, 165, 0)";
ctx.moveTo(335, 340);
ctx.lineTo(235, 340);
ctx.lineTo(335, 190);
ctx.lineTo(435, 340);
ctx.lineTo(335, 340);

ctx.fill();
ctx.stroke();
