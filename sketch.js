//one second
var os = 0;
//circle display(what the text says($100 or 2/sec))
var cD = "$100";
//line display
var lD = "$500";
//triangle display
var tD = "1000";
//square display
var sD = "10,000";

var $ = 100;
var $ps = 0;
var numC = 0;
var numL = 0;
var numT = 0;
var numS = 0;
var cPrice = 100;
var lPrice = 1000;
var tPrice = 20000;
var sPrice = 100000;
//tutorial step
var tStep = 0;
function setup() {
  createCanvas(800, 800);
  frameRate(30);
}

function draw() {
  background(255);
  strokeWeight(3);
  stroke(0);
  fill(255);
  rect(200, 0, 400, 75);
  rect(600, 0, 400, 800);

  //'buy a circle' box
  rect(600, 160, 400, 75);
  fill(255, 0, 0);
  noStroke();
  circle(630, 200, 50);
  fill(0);
  textSize(30);
  text(cD, 675, 210);
  cD = "$" + cPrice;
  if ($ < cPrice - 1) {
    fill(0, 0, 0, 125);
    rect(600, 160, 400, 75);
  }
  if (numC > 0) {
    cPrice = numC * 2 + 100;
  }

  //'buy a line' box
  stroke(0);
  noFill();
  rect(600, 235, 400, 75);
  fill(255, 0, 0);
  line(610, 275, 650, 275);
  fill(0);
  noStroke();
  textSize(30);
  text(lD, 675, 285);
  lD = "$" + lPrice;
  if ($ < lPrice - 1) {
    fill(0, 0, 0, 125);
    rect(600, 235, 400, 75);
  }
  if (numL > 0) {
    lPrice = numL * 3 + 1000;
  }

  //'buy triangle' box
  noFill();
  stroke(0);
  rect(600, 310, 400, 75);
  fill(138, 41, 186);
  noStroke();
  triangle(610, 375, 635, 325, 660, 375);
  fill(0);
  noStroke();
  textSize(30);
  text(tD, 675, 360);
  tD = "$" + tPrice;
  if ($ < tPrice - 1) {
    fill(0, 0, 0, 125);
    rect(600, 310, 400, 75);
  }
  if (numT > 0) {
    tPrice = numT * 4 + 20000;
  }

  //'buy a square' box
  noFill();
  stroke(0);
  rect(600, 385, 400, 75);
  fill(16, 46, 199);
  noStroke();
  rect(615, 400, 50, 50);
  fill(0);
  textSize(30);
  text(sD, 675, 435);
  sD = "$" + sPrice;
  if ($ < sPrice - 1) {
    fill(0, 0, 0, 125);
    rect(600, 385, 400, 75);
  }
  if (numS > 0) {
    sPrice = numS * 5 + 100000;
  }

  fill(0);
  textSize(50);
  fill(209, 198, 81);
  text("$" + $, 200, 50);

  textSize(30);
  text("$" + $ps + "/sec", 450, 70);
  fill(255, 0, 0);
  stroke(0);

  //Shapes
  if (numL > 0) {
    stroke(6, 150, 207);
    line(350, 150, 550, 150);
  }
  noStroke();
  if (numC > 0) {
    noStroke();
    fill(255, 0, 0);
    circle(125, 150, 200);
  }

  if (numT > 0) {
    fill(138, 41, 186);
    triangle(25, 600, 125, 450, 225, 600);
  }
  if (numS > 0) {
    fill(16, 46, 199);
    rect(350, 450, 200, 200);
  }
  if (tStep === 0) {
    fill(255, 0, 0);
    text("Click here to buy a circle-->", 200, 200);
    if (
      mouseX > 600 &&
      mouseY > 160 &&
      mouseY < 235 &&
      $ > 99 &&
      mouseIsPressed
    ) {
      numC = numC + 1;
      $ = $ - 100;
      if (tStep === 0) {
        tStep = 1;
      }
    }
  }

  if (tStep === 1) {
    fill(255, 0, 0);
    text("<-- This is your circle", 250, 200);
    fill(0);
    stroke(0);
    rect(400, 210, 100, 50);
    fill(255, 0, 0);
    text("Next", 410, 250);
    if (
      mouseX > 400 &&
      mouseX < 500 &&
      mouseY > 210 &&
      mouseY < 260 &&
      mouseIsPressed &&
      tStep === 1
    ) {
      tStep = 2;
    }
  }
  if (tStep === 2) {
    fill(255, 0, 0);
    textSize(20);
    text(
      "Circles make $1 every second. You can click the circle to get more money",
      250,
      125,
      300,
      200
    );
    fill(0);
    stroke(0);
    rect(300, 210, 100, 50);
    fill(255, 0, 0);
    text("Next", 310, 250);
    if (
      mouseX > 300 &&
      mouseX < 400 &&
      mouseY > 210 &&
      mouseY < 260 &&
      mouseIsPressed &&
      tStep === 2
    ) {
      tStep = 3;
    }
    textSize(30);
  }

  if (tStep === 3) {
    fill(255, 0, 0);
    text("Let's play!", 250, 200);
    fill(0);
    stroke(0);
    rect(400, 210, 100, 50);
    fill(255, 0, 0);
    text("Next", 410, 250);
    if (
      mouseX > 400 &&
      mouseX < 500 &&
      mouseY > 210 &&
      mouseY < 260 &&
      mouseIsPressed &&
      tStep === 3
    ) {
      tStep = 4;
    }
  }

  if (tStep === 4) {
    if (mouseX > 600 && mouseY > 160 && mouseY < 235) {
      cD = "+$1/sec";
    }
    if (mouseX > 600 && mouseY > 235 && mouseX < 800 && mouseY < 300) {
      lD = "+$12/sec";
    }
    if (mouseX > 600 && mouseY > 300 && mouseX < 800 && mouseY < 390) {
      tD = "+$250/sec";
    }
    if (mouseX > 599 && mouseY > 384 && mouseY < 461 ) {
      sD = "+$1,300/sec";
    }

    $ps = numC * 1 + numL * 12 + numT * 250 + numS * 1300;

    if (os === 30) {
      $ = $ + $ps;
      os = 0;
    }
    os = os + 1;
  }
  if (numC > 0) {
    strokeWeight(1);
    stroke(0);
    textSize(20);
    fill(0);
    text(numC, 125, 150);
    textSize(30);
  }
  if (numL > 0) {
    strokeWeight(1);
    stroke(0);
    textSize(20);
    fill(0);
    text(numL, 450, 145);
    textSize(30);
  }
  if (numT > 0) {
    strokeWeight(1);
    stroke(0);
    textSize(20);
    text(numT, 125, 550);
  }
  if (numS > 0) {
    strokeWeight(1);
    stroke(0);
    textSize(20);
    text(numS, 448, 550);
  }
}
mouseClicked = function () {
  //print(mouseX + "," + mouseY);
  //buying a circle
  if (
    $ > cPrice - 1 &&
    tStep === 4 &&
    mouseX > 600 &&
    mouseY > 160 &&
    mouseY < 235
  ) {
    numC = numC + 1;
    $ = $ - cPrice;
  }
  //buying a line
  if (
    $ > lPrice - 1 &&
    mouseX > 600 &&
    mouseY > 235 &&
    mouseX < 800 &&
    mouseY < 300
  ) {
    numL = numL + 1;
    $ = $ - lPrice;
  }
  //buying a triangle
  if (
    mouseX > 600 &&mouseY > 300 &&mouseX < 800 &&mouseY < 390 &&$ > tPrice - 1) {
    numT = numT + 1;
    $ = $ - tPrice;
  }
  //buying a square
  if (mouseX > 599 && mouseY > 384 && mouseY < 461 && $ > sPrice - 1) {
    numS = numS + 1;
    $ = $ - sPrice;
  }
  if (mouseX > 30 && mouseY > 50 && mouseX < 215 && mouseY < 250) {
    $ = $ + numC;
  }
  if (mouseX > 350 && mouseY > 122 && mouseX < 556 && mouseY < 168) {
    $ = $ + numL * 20;
  }
  if (mouseX > 25 && mouseY > 446 && mouseX < 225 && mouseY < 601) {
    $ = $ + numT * 100;
  }
  if (mouseX > 350 && mouseY > 450 && mouseX < 556 && mouseY < 650) {
    $ = $ + numS * 150;
  }
};
