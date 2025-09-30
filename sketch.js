//custom variable for x coordinate of clouds
let cloudOneX = 50;
//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  
  background('rgb(49,92,149)');
  
  //shooting star
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  //cloud
fill(255);
  stroke('black')
ellipse(cloudOneX, 100, 80, 40);
   
  
  
  fill('yellow')
  circle(320, 100, 100 ,10)
  
  //big gray mountains
  stroke(1000);
  stroke('black')
  fill('#422920');
  triangle(-40,300,75,100, 250,300);
  triangle(100,300,300,100, 500,300);
  
  //ground
   fill('rgb(34,74,34)')
  rect(0, 300, 500,100)
  
  //cloud
fill(255);
ellipse(50, 50, 80, 40);
  
  //cloud
fill(255);
ellipse(cloudOneX, 20, 80, 40);
  
  //cloud
fill(255);
ellipse(200, 70, 80, 40);

  //cloud
fill(255);
ellipse(300, 50, 80, 40);
  
  //clouds
  fill(255);
  
 
  ellipse(cloudOneX + 20, 150, 40, 10);

  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width

  //displays the x and y position of the mouse on the canvas
  fill(255) //white text
 textSize(10)
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
 
 
//trunk
fill("rgb(118,80,72)");
rect(40, 270, 15, 50);
  
    fill("rgb(118,80,72)");
rect(252, 270, 15, 50);
  
  fill("rgb(118,80,72)");
rect(140, 270, 15, 50);
   fill("rgb(118,80,72)");
rect(90, 320, 15, 50);
   fill("rgb(118,80,72)");
rect(212, 320, 15, 50);
  
  
  
//leaves
fill("rgb(69,176,69)");
  ellipse(48, 270, 70, 45);
fill("rgb(69,176,69)");
  ellipse(150, 270, 70, 45);
fill("rgb(69,176,69)");
  ellipse(260, 270, 70, 45);
  fill("rgb(69,176,69)");
  ellipse(98, 320, 70, 45);
    fill("rgb(69,176,69)");
  ellipse(220, 320, 70, 45);
  
   //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width

  //set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height/2); 
  
 


  
  

  
}