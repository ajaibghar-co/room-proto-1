let divs;
let posY = [];
let staggerX = [];
let imgbox;
function setup() {
  noCanvas();
  divs = selectAll(".img-wrapper");
  imgbox = select("#imgbox");
  // console.log(divs[0]);
  // console.log(divs[0].position());
  // var position = divs[0].getBoundingClientRect();
  // var x = position.left;
  // var y = position.top;
  // console.log(x, y);
  console.log(imgbox.width, windowWidth);
  divs.forEach((element, i) => {
    // console.log(element.height);
    element.show();
    let y = random(40, windowHeight - element.height - 140);
    let x = i * 210;
    element.position(x, y);
    staggerX.push(x);
    posY.push(y);
  });
}
let move = 0;

// let pX = 800;
function draw() {
  divs.forEach((element, i) => {
    let pX = staggerX[i] - frameCount;
    element.position(pX, posY[i]);
    let pos = element.position();
    let posX = Object.values(pos)[0];
    if (posX < 0) {
      // console.log(element);
      let x = i * 210 + windowWidth;
      element.position(x - frameCount, posY[i]);
    }
    // if (pX > -element.width) {
    //   pX -= 0.2;
    // } else {
    //   console.log("HI");
    //   pX = windowWidth;
    // }
  });
}
