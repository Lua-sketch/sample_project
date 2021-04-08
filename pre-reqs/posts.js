                  // POST 1

// 1
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


// 2
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


// 3
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


// 4
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


// 5
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
    p.text('r = √(x² + y²)', 280, 70);
  };
};

var interactive5 = new p5(cart_to_polar, 'cart_to_polar');


// 6
var imaginary_unit = function(p){
  p.setup = function(){
    p.createCanvas(120, 40);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(18);
    p.text('i = √(-1)', 40, 20);
  };
};

var interactive6 = new p5(imaginary_unit, 'imaginary_unit');


// 7
var rect_complex_number = function(p){
  p.setup = function(){
    p.createCanvas(140, 40);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(18);
    p.text('z = x + iy', 30, 20);
  };
};

var interactive7 = new p5(rect_complex_number, 'rect_complex_number');


// 8
var polar_complex_number = function(p){
  p.setup = function(){
    p.createCanvas(350, 100);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(18);
    p.text('z = r(cos(θ) + isin(θ)) = r.exp(iθ)', 30, 20);
    p.textSize(12);
    p.text('r = magnitude', 30, 50);
    p.text('θ = fase', 30, 70);
    p.text('exp(iθ) = e^(iθ)', 30, 90);
  };
};

var interactive8 = new p5(polar_complex_number, 'polar_complex_number');


// 9
var euler = function(p){
  p.setup = function(){
    p.createCanvas(200, 30);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(14);
    p.text('exp(iθ) = cos(θ) + isin(θ)', 20, 20);
  };
};

var interactive9 = new p5(euler, 'euler');

// 10
var complex_plane = function(p){
  var w=370;
  var h=280;

  p.setup = function(){
    p.createCanvas(w, h);
  };

  p.draw = function(){
    p.background(255);
    p.line(w/2+100, h/2, w/2-100, h/2);
    p.line(w/2, h/2+100, w/2, h/2-100);
    p.line(w/2, h/2, w/2-80, h/2-60);
    p.noFill();
    p.arc(w/2, h/2, 30, 30, p.PI+p.asin(3/5), 0, p.PIE);
    p.line(w/2-80, h/2-60, w/2-80, h/2);
    p.fill(0);
    p.text('x', w/2-50, h/2+20);
    p.text('y', w/2-100, h/2-30);
    p.text('r', w/2-40, h/2-40);
    p.text('θ', w/2+10, h/2-20);
    p.text('Im', w/2+5, h/2-90);
    p.text('Re', w/2+90, h/2+12);
  };
};

var interactive10 = new p5(complex_plane, 'complex_plane');


// 11
var convert_polar_rect_complex = function(p){
  p.setup = function(){
    p.createCanvas(350, 140);
    slider_complex_x = p.createSlider(-100, 100, 0);
    slider_complex_y = p.createSlider(-100, 100, 0);
  };
  p.draw = function(){
    p.background(255);
    var x = slider_complex_x.value();
    var y = slider_complex_y.value();
    p.textSize(16);
    p.text('(x, y) = ('+x+', '+y+')', 20, 20);
    p.text('(r, θ) = ('+p.round(p.sqrt(p.sq(x)+p.sq(y)))+', '+p.round(p.atan(y/x)*180/p.PI)+')', 20, 50);
    p.textSize(18);
    p.text('r = √(x² + y²)', 200, 20);
    p.text('θ = arctan(y/x)', 200, 50);
    p.text('x = rcos(θ)', 200, 80);
    p.text('y = rsin(θ)', 200, 110);
  };
};

var interactive11 = new p5(convert_polar_rect_complex, 'convert_polar_rect_complex');


// 12
var complex_ops = function(p){
  p.setup = function(){
    p.createCanvas(500, 130);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('conjugado complexo: z* = x - iy = r.exp(-iθ)', 20, 40);
    p.text('adição: z1 + z2 = (a + ib) + (c + id) = (a + c) + i(b + d)', 20, 70);
    p.text('multiplicação: z1.z2 = (a + ib)(c + id) = (ac - bd) + i(ad + bc)', 20, 100);
  };
};

var interactive12 = new p5(complex_ops, 'complex_ops');


// 13
var sets = function(p){
  p.setup = function(){
    p.createCanvas(370, 230);
  };
  p.draw = function(){
    p.background(255);
    p.stroke(0, 0, 255);
    p.ellipse(40, 140, 75, 75);
    p.stroke(0, 255, 0);
    p.ellipse(50, 140, 30, 30);
    p.stroke(0, 255, 255);
    p.ellipse(160, 140, 75, 75);
    p.stroke(0, 255, 0);
    p.ellipse(280, 140, 75, 75);
    p.stroke(0, 0, 255);
    p.ellipse(290, 140, 30, 30);
    p.stroke(0, 255, 0);
    p.textSize(16);
    p.text('A ', 20, 40);
    p.text('A ', 140, 40);
    p.text('A ', 260, 40);
    p.stroke(0);
    p.text('⊂ ', 40, 40);
    p.text('= ', 160, 40);
    p.text('⊃ ', 280, 40);
    p.stroke(0, 0, 255);
    p.text('B', 60, 40);
    p.text('B', 180, 40);
    p.text('B', 300, 40);
  };
};

var interactive13 = new p5(sets, 'sets');


// 14
var sample_space_exs = function(p){
  p.setup = function(){
    p.createCanvas(600, 280);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(12);
    p.rect(20, 130, 100, 20);
    p.text('experimento', 30, 145);
    p.ellipse(220, 140, 130, 160);
    p.rect(185, 80, 70, 25);
    p.text('evento A', 200, 95);
    p.rect(185, 120, 70, 25);
    p.text('evento B', 200, 135);
    p.rect(185, 160, 70, 25);
    p.text('evento C', 200, 175);
    p.line(120, 140, 185, 92.5);
    p.line(120, 140, 185, 132.5);
    p.line(120, 140, 185, 172.5);
    p.textSize(18);
    p.text('Ω = (A, B, C)', 320, 140);
  };
};

var interactive14 = new p5(sample_space_exs, 'sample_space_exs');


// 15
var prob_law = function(p){
  p.setup = function(){
    p.createCanvas(370, 280);
  };
  p.draw = function(){
    p.background(255);
    p.line(20, 20, 20, 220);
    p.line(20, 220, 220, 220);
    p.rect(40, 200, 20, 20);
    p.rect(80, 100, 20, 120);
    p.rect(120, 160, 20, 60);
    p.text('A', 50, 190);
    p.text('B', 90, 90);
    p.text('C', 130, 150);
    p.text('probabilidade', 20, 20);
    p.text('evento', 220, 220);
  };
};

var interactive15 = new p5(prob_law, 'prob_law');


// 16
var prob_rules = function(p){
  p.setup = function(){
    p.createCanvas(430, 120);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('Não-negatividade: ', 20, 30);
    p.text('Aditividade: ', 20, 60);
    p.text('Normalização: ', 20, 90);
    p.textSize(12);
    p.text('P(A) ≥ 0, para todo A', 160, 30);
    p.text('P(A ⋃ B) = P(A) + P(B), para A e B mutuamente exclusivos', 110, 60 );
    p.text('P(Ω) = 1', 130, 90);
  };
};

var interactive16 = new p5(prob_rules, 'prob_rules');


// 17
var random_variable = function(p){
  p.setup = function(){
    p.createCanvas(600, 280);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(12);
    p.ellipse(100, 140, 130, 160);
    p.rect(65, 80, 70, 25);
    p.text('evento A', 80, 95);
    p.rect(65, 120, 70, 25);
    p.text('evento B', 80, 135);
    p.rect(65, 160, 70, 25);
    p.text('evento C', 80, 175);
    p.textSize(16);
    p.text('Ω', 90, 50);
    p.line(200, 200, 400, 200);
    p.line(135, 92.5, 300, 200);
    p.line(135, 132.5, 220, 200);
    p.line(135, 172.5, 370, 200);
    p.text('reta real', 410, 200);
  };
};

var interactive17 = new p5(random_variable, 'random_variable');


// 18
var expected_value = function(p){
  p.setup = function(){
    p.createCanvas(300, 100);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('E[X] = <X> = ∑ x.P(X = x)', 20, 20);
    p.text('= x1.P(X = x1) + ... + xn.P(X = xn)', 20, 50);
  };
};

var interactive18 = new p5(expected_value, 'expected_value');


// 19
var variance = function(p){
  p.setup = function(){
    p.createCanvas(300, 100);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('var[X] = E[(X - E(X))²]', 20, 20);
    p.text('= ∑ (x-E[X])².P(X = x)', 20, 50);
  };
};

var interactive19 = new p5(variance, 'variance');


// 20
var ket = function(p){
  p.setup = function(){
    p.createCanvas(200, 160);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('|v ⟩ = [[v1],', 20, 20);
    p.text('        [v2]', 20, 40);
    p.text('         .', 20, 60);
    p.text('         .', 20, 80);
    p.text('         .', 20, 100);
    p.text('        [vn]]', 20, 120);
  };
};

var interactive20 = new p5(ket, 'ket');


// 21
var bra = function(p){
  p.setup = function(){
    p.createCanvas(200, 30);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('⟨v | = |v ⟩† = [v1 v2 ... v3]', 20, 10);
  };
};

var interactive21 = new p5(bra, 'bra');


// 22
var superposition = function(p){
  p.setup = function(){
    p.createCanvas(200, 70);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('|ψ ⟩ = α|0 ⟩ + β|1 ⟩', 20, 20);
    p.text('α, β € C', 20, 50);
  };
};

var interactive22 = new p5(superposition, 'superposition');


// 23
var prob_amplitudes = function(p){
  p.setup = function(){
    p.createCanvas(200, 70);
  };
  p.draw = function(){
    p.background(255);
    p.textFont('Georgia');
    p.textSize(16);
    p.text('P(0) = |α|²', 20, 20);
    p.text('P(1) = |β|²', 20, 50);
  };
};

var interactive23 = new p5(prob_amplitudes, 'prob_amplitudes');


              //POST 2

//1
var weight_ex_arrow = function(p){
  p.setup = function(){
    p.createCanvas(150, 180);
  };
  p.draw = function(){
    p.noFill();
    p.background(255);
    p.stroke(0);
    //person
    p.ellipse(100, 40, 20, 20);
    p.line(100, 50, 100, 90);
    p.line(100, 90, 120, 130);
    p.line(100, 90, 80, 130);
    p.line(100, 50, 110, 70);
    p.line(100, 50, 90, 70);
    p.stroke(0, 0, 200);
    //force
    p.line(100, 70, 100, 140);
    p.fill(0, 0, 200);
    p.triangle(105, 140, 95, 140, 100, 145);
    p.text('700', 108, 145)
  };
};

var int_2_1 = new p5(weight_ex_arrow, 'weight_ex_arrow');

//2
var weight_ex_vector = function(p){
  p.setup = function(){
    p.createCanvas(100, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('[[0]', 15, 20);
    p.text('[700]]', 15, 53);
  };
};

var int_2_2 = new p5(weight_ex_vector, 'weight_ex_vector');

//3
var general_2d_vector = function(p){
  p.setup = function(){
    p.createCanvas(100, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('v = [[vₓ]', 15, 20);
    p.text('    [vᵧ]]', 17, 53);
  };
};

var int_2_3 = new p5(general_2d_vector, 'general_2d_vector');

//4
var properties = function(p){
  p.setup = function(){
    p.createCanvas(300, 100);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('||v|| = √(vₓ² + vᵧ²)', 20, 20);
    p.text('∠ v = arctan(vᵧ/vₓ)', 20, 53);
  };
};

var int_2_4 = new p5(properties, 'properties');

//5
var vector_sum_ex = function(p){
  p.setup = function(){
    p.createCanvas(300, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('[[40]', 20, 20);
    p.text(' [0]]', 20, 53);
    p.text('+', 70, 31.5);
    p.text('[[0]', 100, 20);
    p.text(' [30]]', 100, 53);
    p.text('=', 140, 31.5);
    p.text('[[40]', 170, 20);
    p.text(' [30]]', 170, 53);
  };
};

var int_2_5 = new p5(vector_sum_ex, 'vector_sum_ex');

//6
var vector_sum_ex2 = function(p){
  p.setup = function(){
    p.createCanvas(300, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('[[20√3]', 20, 20);
    p.text(' [20]]', 20, 53);
    p.text('+', 80, 31.5);
    p.text('[[15]', 100, 20);
    p.text(' [15√3]]', 100, 53);
    p.text('=', 150, 31.5);
    p.text('[[20√3 + 15]', 170, 20);
    p.text(' [20 + 15√3]]', 170, 53);
  };
};

var int_2_6 = new p5(vector_sum_ex2, 'vector_sum_ex2');

//7
var vector_sum_formula = function(p){
  p.setup = function(){
    p.createCanvas(300, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('a + b', 20, 20);
    p.text('=', 60, 20);
    p.text('[[aₓ + bₓ]', 90, 20);
    p.text(' [aᵧ + bᵧ]]', 90, 53);
  };
};

var int_2_7 = new p5(vector_sum_formula, 'vector_sum_formula');

//8
var vector_scalar_mult_ex = function(p){
  p.setup = function(){
    p.createCanvas(300, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('2 * ', 20, 20)
    p.text('[[40]', 50, 20);
    p.text(' [30]]', 50, 53);
    p.text('=', 100, 31.5);
    p.text('[[80]', 120, 20);
    p.text(' [60]]', 120, 53);
  };
};

var int_2_8 = new p5(vector_scalar_mult_ex, 'vector_scalar_mult_ex');

//9
var vector_scalar_mult_formula = function(p){
  p.setup = function(){
    p.createCanvas(300, 90);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('c * ', 20, 20);
    p.text('[[vₓ]', 50, 20);
    p.text(' [vᵧ]]', 50, 53);
    p.text('=', 100, 31.5);
    p.text('[[c*vₓ]', 120, 20);
    p.text(' [c*vᵧ]]', 120, 53);
  };
};

var int_2_9 = new p5(vector_scalar_mult_formula, 'vector_scalar_mult_formula');

//10
var unit_vectors = function(p){
  p.setup = function(){
    p.createCanvas(300, 80);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('i = [[1]', 20, 20);
    p.text(' [0]]', 40, 53);
    p.text('j = [[0]', 90, 20);
    p.text(' [1]]', 110, 53);
  };
};

var int_2_10 = new p5(unit_vectors, 'unit_vectors');

//11
var vector_components = function(p){
  p.setup = function(){
    p.createCanvas(150, 50);
  };
  p.draw = function(){
    p.background(255);
    p.textSize(16);
    p.text('v = vₓ i + vᵧ j', 20, 20);
  };
};

var int_2_11 = new p5(vector_components, 'vector_components');

//12
var threed_vector = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//13
var general_vector = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//14
var props_and_ops = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//15
var form = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//16
var column_v_form = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//17
var row_v_form = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//18
var form_exs = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//19
var column_v = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//20
var column_v_transpose = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//21
var row_v = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//22
var row_v_transpose = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//23
var inner_product = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//24
var summation_symbol = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//25
var inner_product_ex = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//26
var inner_with_self = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//27
var inner_with_self_norm = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//28
var normalization = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//29
var conjugate_transpose = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//30
var conj_trans_ex = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//31
var wrong_way = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//32
var complex_inner_product = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//33
var right_way = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//35
var grocery_list = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//36
var linear_combs = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//37
var vector_op = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//38
var vector_op_graph = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//39
var matrix_ex = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//40
var zero_to_1 = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//41
var vector_op2_graph = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//42
var wrong_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//43
var wrong_result = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//44
var right_result = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//45
var general_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//46
var matrix_sum = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//47
var matrix_scalar = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//48
var matrix_vector = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//49
var matrix_vector_draw = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//50
var matrix_vector_forms = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//51
var matrix_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//52
var matrix_matrix_forms = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//53
var matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//54
var matrix_transpose = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//55
var matrix_conj_trans = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//56
var identity_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//57
var inverse_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//58
var inv_m_formula = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//59
var system = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//60
var system_matrix = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}

//61
var system_solution = function(p){
  p.setup = function(){
    p.createCanvas();
  };
  p.draw = function(){
    p.background(255);
  };
}
