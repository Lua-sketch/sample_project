
/* var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} */

const c = document.querySelector('#circ');
const c_style = getComputedStyle(c);
const c_w = c_style.width;
const c_h = c_style.height;
console.log('coffee')

let slider;
let theta;
let r = 50;
let xi = 200;
let yi = 50;
let x;
let y;

function setup() {
  console.log('enter setup')
  let canvas = createCanvas(370, 280);
  slider = createSlider(0, 360, 0);
  slider.parent('circ');
  //slider.position(5, 80);
  canvas.parent('circ');
  console.log(slider);
}

function draw(){
  textFont('Georgia');
  background(255, 255, 255);
  fill(0);
  text(slider.value(), 20, 100);
  angleMode(DEGREES);
  theta = slider.value();
  x = r*cos(theta) + xi;
  y = -r*sin(theta) + yi;
  stroke(0, 0, 0);
  fill(255, 255, 255);
  circle(xi, yi, 2*r);
  line(xi, yi, x, y);
  fill(0);
  text(theta*PI/180, x+5, y+5);
  textSize(16);
  text('θ = 𝜙 * (𝜋 / 180)', 175, 150);
  textSize(12);
  text('θ = ângulo em radianos', 175, 175);
  text('𝜙 = ângulo em graus', 175, 200);
}
