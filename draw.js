import {WIDTH, HEIGHT} from './consts.js';

const ID_CANVAS = 'c';

export const Side = {
  TOP: 0,
  BOTTOM: 1,
};

export function draw(arcs) {
  createCanvas();
  const stage = createStage();

  for (const arc of arcs) {
    if (!(arc.right > arc.left)) {
      throw new Error('right must be greater than left');
    }
    if (!(arc.side === Side.TOP || arc.side === Side.BOTTOM)) {
      throw new Error('side must be Side.TOP or Side.BOTTOM');
    }
    const radius = (arc.right - arc.left) / 2;
    const midpoint = (arc.right + arc.left) / 2;
    const shape = new createjs.Shape();
    const graphics = shape.graphics.beginStroke('blue');
    switch (arc.side) {
      case Side.TOP:
        graphics.arc(midpoint, 0, radius, Math.PI, 2*Math.PI);
        break;
      case Side.BOTTOM:
        graphics.arc(midpoint, 0, radius, 0, Math.PI);
        break;
    }
    stage.addChild(shape);
  }

  stage.update();
}

function createCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = ID_CANVAS;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.body.appendChild(canvas);
}

function createStage() {
  const stage = new createjs.Stage(ID_CANVAS);
  stage.y = HEIGHT / 2;
  return stage;
}