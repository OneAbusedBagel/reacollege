"use strict"

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255, 127, 80)"
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "rgb(106, 90, 205)"
ctx.fillRect(250, 50, 50, 50);
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0, 0, 128)";
ctx.strokeRect(250, 50, 50, 50);

ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(238, 130, 238)";
ctx.strokeRect(100, 250, 50, 50);

ctx.fillStyle = "rgb(143, 188, 143)"
ctx.fillRect(250, 250, 100, 100);
ctx.lineWidth = 15;
ctx.strokeStyle = "rgb(34, 139, 34)";
ctx.strokeRect(250, 250, 100, 100);
