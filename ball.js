
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 500;
var y = 250;
var radius = 30;
var xSpeed = 5;
var ySpeed = 0;
var ballColor = "pink";

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

    context.fillStyle = "red";
    context.fill();

    
   x = x + xSpeed;
   y = y + ySpeed;
   
    
  
    if (x + radius >= canvas.width)
    {
        x = canvas.width - radius;
      xSpeed = -xSpeed
      ballColor = "blue";
    }
    if (x - radius <= 0)
    {
       x = radius;
        xSpeed = -xSpeed;
        ballColor = "red";
    }

}

setInterval(drawBall, 20);