import {WIDTH, HEIGHT} from './consts.js';

const ID_CANVAS = 'c';

export const Side = {
  TOP: 0,
  BOTTOM: 1,
};

export class Draw {
  constructor() {
    this.init();
  }

  update(arcs) {
    this.init();

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
      this.stage.addChild(shape);
    }

    this.stage.update();
  }

  makeCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = ID_CANVAS;
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    document.body.appendChild(this.canvas);
  }

  makeStage() {
    this.stage = new createjs.Stage(ID_CANVAS);
    this.stage.y = HEIGHT / 2;
  }

  init() {
    if (this.canvas) {
      this.canvas.remove();
    }
    this.makeCanvas();
    this.makeStage();
  }

}