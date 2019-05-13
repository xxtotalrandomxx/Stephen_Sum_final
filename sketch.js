
    
function preload (){
  img1 = loadImage ('Ocean.jpg');
  img2 = loadImage ('Bird2.png');
  img3 = loadImage ('Dark Ocean.jpg');
  img4 = loadImage ('Fallbird.png');
  img5 = loadImage ('GlitchOcean.jpg');
}

function setup() {
  createCanvas(800, 460);
}

function draw() {
  background(220);
  imageMode(CENTER);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  //Ocean
  image(img1, 400, 200);
  
  //Dark Ocean
  if ((mouseX > 0) && (mouseX < 800) && (mouseY > 300) && (mouseY < 533)){
    image(img3, 400, 240);
  }
  
  //Ocean
  else {
  image(img1, 400, 240);
}
  //Glitch Ocean
  if (mouseIsPressed) {
    imageMode(CENTER); 
    image(img5, 400, 250);
  }
  
  //Birds
  else {
    imageMode(CENTER);
    image(img2, mouseX, mouseY);
}
  
  //Falling Bird
  if (mouseIsPressed) {
    imageMode(CENTER); 
     image(img4, mouseX, mouseY);
  }
  
  //Birds
  else {
    imageMode(CENTER);
    image(img2, mouseX, mouseY);
}
}