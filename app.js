import {draw, Side} from './draw.js';
import {recaman} from './sequence.js';

const SCALE = 10;
const LIMIT = 20;

const seq = recaman(LIMIT);

const arcs = [];
for (let i = 0; i < seq.length-1; i++) {
  const first = seq[i];
  const second = seq[i+1];
  const side = i % 2 === 0 ? Side.TOP : Side.BOTTOM;
  let left, right;
  if (first < second) {
    left = first;
    right = second;
  } else if (first > second) {
    left = second;
    right = first;
  } else {
    throw new Error('Something went wrong, duplicate in sequence');
  }
  arcs.push({left: left * SCALE, right: right * SCALE, side});
}

draw(arcs);