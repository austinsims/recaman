const WIDTH = 500;
const HEIGHT = 300;

const canvas = document.createElement('canvas');
canvas.id = 'c';
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);

const stage = new createjs.Stage('c');
stage.y = 150;

const Side = {
  TOP: 0,
  BOTTOM: 1,
};

function makeArc({left, right, side}) {
  if (!(right > left)) {
    throw new Error('right must be greater than left');
  }
  if (!(side === Side.TOP || side === Side.BOTTOM)) {
    throw new Error('side must be Side.TOP or Side.BOTTOM');
  }
  const radius = (right - left) / 2;
  const midpoint = (right + left) / 2;
  const arc = new createjs.Shape();
  const graphics = arc.graphics.beginStroke('blue');
  switch (side) {
    case Side.TOP:
      graphics.arc(midpoint, 0, radius, Math.PI, 2*Math.PI);
      break;
    case Side.BOTTOM:
      graphics.arc(midpoint, 0, radius, 0, Math.PI);
      break;
  }
  stage.addChild(arc);
}

makeArc({left: 0, right: 20, side: Side.TOP});
makeArc({left: 20, right: 40, side: Side.BOTTOM});
makeArc({left: 40, right: 60, side: Side.TOP});

stage.update();