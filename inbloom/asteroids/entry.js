const Game = require('./game.js')
const Images = require('./images.js')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
context.font = "18px monospace";
context.fillStyle = "#32CD32";
context.strokeStyle = "#ffffff";



var startGame = function () {
    new Game({
    context:context
  })
}

Images.loadImages(startGame)
context.fillText("LOADING...", canvas.width/2 - 50, canvas.height/2);
