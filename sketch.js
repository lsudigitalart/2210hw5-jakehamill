var t = 0;
var r = 0;
var s = 0
var rr = 0;


function setup() {
  createCanvas(900,700);
  background(255);
}

function draw() {
e = random(120, 200);
g = random(120, 200);
b = random(120, 200);

translate(width/2, height/2);

translate(t, r)
 t = t + 1;
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(10, 10, 100, 30);

}
