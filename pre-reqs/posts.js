//FIRST INTERACTIVE
var right_triangle = function(p){

  var x1 = 20;
  var y1 = 20;
  var x2 = 20;
  var y2 = 100;
  var x3 = 80;
  var y3 = 100;

  p.setup = function(){
    p.createCanvas(370, 180);
  };

  p.draw = function(){
    p.background(255);
    p.triangle(x1, y1, x2, y2, x3, y3);
    p.arc(x3, y3, 30, 30, p.PI, p.PI+p.asin(4/5), p.PIE);
    p.text('θ', 55, 95);
    p.textFont('Georgia');
    p.textSize(14);
    p.text('sin(θ) = c/a', 120, 30);
    p.text('cos(θ) = b/a', 120, 50);
    p.text('tan(θ) = c/b = sin(θ)/cos(θ)', 120, 70);
    p.text('a', 50, 55);
    p.text('b', 40, 115);
    p.text('c', 10, 70);
  };
};

var interactive1 = new p5(right_triangle, 'right_triangle');


//SECOND INTERACTIVE
var unit_circle = function(p){
  var r=70;
  var w=370;
  var h=280;
  var xcenter=w/2;
  var ycenter=h/2;

  p.setup = function(){
    p.createCanvas(w, h);
  };

  p.draw = function(){
    p.background(255);
    p.circle(xcenter, ycenter, 2*r);
    p.line(xcenter, ycenter+r+10, xcenter, ycenter-r-10);
    p.line(xcenter+r+10, ycenter, xcenter-r-10, ycenter);
    p.line(xcenter, ycenter, xcenter+r*p.sqrt(3)/2, ycenter-r/2);
    p.line(xcenter+r*p.sqrt(3)/2, ycenter-r/2, xcenter+r*p.sqrt(3)/2, ycenter);
    p.arc(xcenter, ycenter, 30, 30, -p.PI/6, 0, p.PIE);
    p.text('θ', xcenter+20, ycenter-3);
    p.text('(x, y) = (cos(θ), sin(θ))', xcenter+r*p.sqrt(3)/2+3, ycenter-r/2-3);
    //p.rotate(-p.PI/6);
    p.text('r = 1', xcenter+r*p.sqrt(3)/4-10, ycenter-r/4-20);
  };
};

var interactive2 =  new p5(unit_circle, 'unit_circle');


//THIRD INTERACTIVE
var trig_rules = function(p){
  p.setup = function(){
    p.createCanvas(500, 270);
  };

  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('sin²(θ) + cos²(θ) = 1', 10, 20);
    p.text('sin(-θ) = -sin(θ)', 10, 60);
    p.text('cos(-θ) = cos(θ)', 150, 60);
    p.text('tan(-θ) = -tan(θ)', 290, 60);
    p.text('sin(θ+𝜋/2) = cos(θ)    sin(θ-𝜋/2) = −cos(θ)', 10, 100);
    p.text('cos(θ+𝜋/2) = -sin(θ)   cos(θ-𝜋/2) = sin(θ)', 10, 140);
    p.text('sin(θ+𝜋) = -sin(θ)    sin(θ-𝜋) = -sin(θ)', 10, 180);
    p.text('cos(θ+𝜋) = -cos(θ)    cos(θ-𝜋) = -cos(θ)', 10, 220);
  };
};

var interactive3 = new p5(trig_rules, 'trig_rules');


//FOURTH INTERACTIVE
var circ = function(p){

  var slider;
  var theta;
  var r = 50;
  var xi = 200;
  var yi = 50;
  var x;
  var y;

  p.setup = function(){
    p.createCanvas(390, 280);
    slider = p.createSlider(0, 360, 0);
  };

  p.draw = function(){
    p.textFont('Georgia');
    p.background(255);
    p.fill(0);
    p.text(slider.value(), 370, 260);
    theta = slider.value();
    x = r*p.cos(theta*p.PI/180) + xi;
    y = -r*p.sin(theta*p.PI/180) + yi;
    p.stroke(0);
    p.fill(255);
    p.circle(xi, yi, 2*r);
    p.line(xi, yi, x, y);
    p.fill(0);
    p.text(theta*p.PI/180, x+5, y+5);
    p.textSize(16);
    p.text('θ = 𝜙 * (𝜋 / 180)', 175, 150);
    p.textSize(12);
    p.text('θ = ângulo em radianos', 175, 175);
    p.text('𝜙 = ângulo em graus', 175, 200);
  };
};

var interactive4 = new p5(circ, 'circ');


//FIFTH INTERACTIVE
var cart_to_polar = function(p){
  var w=375;
  var h=290;

  p.setup = function(){
    p.createCanvas(w, h);
    slider_x = p.createSlider(-100, 100, 0);
    slider_y = p.createSlider(-100, 100, 0);
  };

  p.draw = function(){
    var x = slider_x.value();
    var y = slider_y.value()
    p.background(255);
    p.line(w/2, h/2+100, w/2, h/2-100);
    p.line(w/2+100, h/2, w/2-100, h/2);
    p.fill(0);
    p.circle(w/2+x, h/2-y, 5);
    p.text('x = '+x, 330, 260);
    p.text('y = '+y, 330, 280);
    var r = p.round(p.sqrt(p.sq(x)+p.sq(y)));
    var theta = p.round(p.atan(y/x));
    if (x<0){
      p.text('(r, θ) = '+'('+r+', '+theta+')', w/2+x+10, h/2-y);
    }else{
      p.text('(r, θ) = '+'('+r+', '+theta+')', w/2+x-90, h/2-y);
    };
    p.text('θ = arctan(y/x)', 280, 100);
    p.text('r = sqrt(x² + y²)', 280, 70);
  };
};

var interactive5 = new p5(cart_to_polar, 'cart_to_polar');
