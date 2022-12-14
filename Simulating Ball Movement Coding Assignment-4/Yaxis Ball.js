var velocity = 100; //declare a variable velocity and assign the value 100
var positionX = 0;//declare a variable PositionX and assign the value 0
var positionY = 0;
var reverse = false;//declare a variable reverse and assign the value false;

var ball = document.getElementById('ball'); 
var ball2 =document.getElementById('ball2');
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;//Xmin for start
  var Xmax = 1280;//Xmax for end
  var Ymin = 0;
  var Ymax = 1280;
 //For  reverse 
  if(reverse){
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball2.style.top = positionX + 'px';
    ball2.style.left = positionY + 'px';
    ball.style.left = positionX + 'px';
  }
  else{
    positionX = positionX + velocity;///positionX and velocity increment
    positionY = positionY + velocity
    ball2.style.top = positionX + 'px';
    ball2.style.left = positionY + 'px';
    ball.style.left = positionX + 'px';
    
  }
  if(positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === Ymin){
    reverse = !reverse;//not operator reverse false to true
  }
 
}
  
//ball.style.top = positionX + 'px';
//ball.style.left = positionY + 'px';



// This call the moveBall function every 100ms
setInterval(moveBall, 100);