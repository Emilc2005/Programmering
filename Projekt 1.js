// let betyder at man definere en variabel.
// = betyder at jeg tildeler mi variabel en værdi.

//"Spiller";
let x;
let y;
let b = 0;
let speed = 2.5;
let d = 40;
let a = speed;

//("kat 1 ");
let g; //x
let h; //Y
let k = 40; //Diameter
let u = 2; //speed
let z = u;
let o = 0;
let p = 2; //speed 2

//("kat 2 ");
let t; //x
let l; //Y
let c = 40; //Diameter
let n = 2; //speed
let m = u;
let w = 0;
let q = 2; //speed 2

//Her får jeg den først til at lave en canvas.
//Derefter bestemmer koden hvor de 3 cirkler skal starte.
//Det gør også at de starter indeen for canvaset.

function setup() {
  createCanvas(400, 400);
  //("spiller")
  x = random(0 + d / 2, width - d / 2);
  y = random(0 + d / 2, height - d / 2);

  //("Kat 1")
  g = random(0 + k / 2, height - k / 2);
  h = random(0 + k / 2, width - k / 2);

  //("kat 2")
  t = random(0 + c / 2, height - c / 2);
  l = random(0 + c / 2, width - c / 2);
}

function draw() {
  background(0, 255, 0);
  //("Spiller");
  if (x > width - d / 2 || x < d / 2) {
    speed *= -1;
  }
  if (y > height - d / 2 || y < d / 2) {
    speed *= -1;
  }

  //("Kat 1");
  if (g > width - k / 2 || g < k / 2) {
    u *= -1;
  }
  if (h > height - k / 2 || h < k / 2) {
    p *= -1;
  }

  //("Kat 2");
  if (t > width - c / 2 || t < c / 2) {
    n *= -1;
  }
  if (l > height - c / 2 || l < c / 2) {
    q *= -1;
  }

  //Koden over sørger for at alle 3 cirkler bliver inde for canvaset når de rammer kanten.
  //Nar man sætter speed *= -1 gør det så den skifter retning.

  //("Spiller");
  x += speed * a;
  y += speed * b;
  fill(0, 0, 255);
  circle(x, y, d);

  //("Kat 1");
  g += u * z;
  h -= p * z;
  fill(255, 0, 0);
  circle(g, h, k);

  //("kat 2")
  t += n * m;
  l -= q * m;
  circle(t, l, c);

  // I de 3 felter over tegner den cirklerne og giver dem en farve ved fill.
  // Den sørger også får farten på den du styre men også på de 2 katte.

  if (x + d <= g + k / 2) {
    console.log("game over");
  }
  if (x + d <= t + c / 2) {
    console.log("game over");
  }

  // I koden over cheker den om musen og katten rammer hindanden og skriver "game over" i konsolen hvis de rammer.
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }

  // Det sidste kode gør så du kan styrer musen med piletasterne.
}
