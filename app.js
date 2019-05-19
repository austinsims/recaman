import {draw, Side} from './draw.js';

const arcs = [
  {left: 0, right: 20, side: Side.TOP},
  {left: 20, right: 40, side: Side.BOTTOM},
  {left: 40, right: 60, side: Side.TOP},
];

draw(arcs);