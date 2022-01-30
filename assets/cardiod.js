function setup() {
  let con=document.querySelector('.container');
  var w = 0.8*con.offsetWidth;
  var h=500; 
  let c=createCanvas(w,h);
  c.parent('container');
  //c.center('horizontal');
  background(20, 20, 50);
  stroke(255);
  strokeWeight(2);
  line(100,100,200,200);
  noFill(); 
}
function draw(){
  circle(mouseX, mouseY, 20, 20);
}
