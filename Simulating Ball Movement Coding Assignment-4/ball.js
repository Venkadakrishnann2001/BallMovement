//Set global variable that would contain the position, velocity and the html element "ball"


var velocity = 100; //declare a variable velocity and assign the value 100
var positionX = 0;//declare a variable PositionX and assign the value 0
var reverse = false;//declare a variable reverse and assign the value false;

var ball = document.getElementById('ball'); 
var ball2 =document.getElementById('ball2');
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;//Xmin for start
  var Xmax = 1280;//Xmax for end
 //For  reverse 
  if(reverse){
    positionX = positionX - velocity;
    ball.style.left = positionX + 'px';
    ball2.style.right = positionX + 'px';
  }
  else{
    positionX = positionX + velocity;///positionX and velocity increment
    ball.style.left = positionX + 'px';
    ball2.style.right = positionX + 'px';
    
  }
  if(positionX > Xmax || positionX === Xmin){
    reverse = !reverse;//not operator reverse false to true
  }
 
}
  
//ball.style.top = positionX + 'px';
//ball.style.left = positionY + 'px';



// This call the moveBall function every 100ms
setInterval(moveBall, 100);
