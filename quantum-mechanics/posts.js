var post_4_2_int_1 = function(p){
  p.setup = function(){
    p.createCanvas(400, 200);
  },
  p.draw = function(){
    p.ellipse(200, 100, 350, 150);
    p.ellipse(110, 120, 70, 40);
    p.ellipse(200, 140, 70, 40);
    p.ellipse(300, 120, 70, 40);
    p.ellipse(145, 70, 70, 40);
    p.ellipse(255, 70, 70, 40);
    p.text("Física", 150, 20);
    p.text("Termo", 100, 120);
    p.text("Mecânica", 180, 140);
    p.text("Óptica", 290, 120);
    p.text("EM", 145, 70);
    p.text("Quântica", 235, 70);
  }
};

var render_post_4_2_int_1 = new p5(post_4_2_int_1, 'post_4_2_int_1');
