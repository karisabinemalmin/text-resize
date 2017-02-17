var canvas;
var button;
var button_clear;
var bgcolor;
var textbox;
var slider;
var p;
var nameP;
var h1;

function setup() {
  canvas  = createCanvas(400, 200);
  slider  = createSlider(20, 50, 35);
  button = createButton("Endre farge");
  button_clear = createButton("Fjern farge");
  textbox = createInput("Make a new title");
  h1 = createElement('h1', 'Title');
  p = createP("How Turing’s ideas evolved over the course of his life as he tussled with this paradox is among the many profound and possibly unanswerable questions examined with enormous intellectual elegance in A Mad Man Dreams of Turing Machines, another thread of which explores how the mathematician Kurt Gödel shaped our ideas of truth. Complement this particular thread with Marcus Aurelius on mortality and the key to living fully, Mary Oliver on the measure of aliveness, and Oliver Sacks on death, destiny, and the redemptive radiance of a life well lived.");

  textbox.input(updateText);
  button.mousePressed(changeColor);
  button_clear.mousePressed(removeColor);
}

function updateText() {
  h1.html(this.value());
}

function changeColor() {
  fill(random(255),random(255),random(255));
}

function removeColor() {
  noFill();
}

function draw() {
  background(223);
  // fill(232,0,111);
  ellipse(200,100,slider.value(),slider.value());
  p.style("font-size", slider.value());
  h1.style("font-size", slider.value());
}
