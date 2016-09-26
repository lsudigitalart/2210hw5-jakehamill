var t = 0;
var r = 0;
var s = 0
var rr = 0;


function setup() {
  createCanvas(1200,400);
  background(200);
  ellipseMode(CENTER);
}

function draw() {
e = random(120, 200);
g = random(120, 200);
b = random(120, 200);

push();
translate(0, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(200, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(400, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(600, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(800, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(1000, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();

push();
translate(1200, 200);
rotate(rr);
 rr = rr + PI;
rotate(r);
 r = r + 2;
fill(e , g, b);
ellipse(100, 100, 100, 30);
for (var t = 0; t < 1000; t++) {
}
pop();










}
