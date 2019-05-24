import {LIMIT} from './consts.js';
import {Draw, Side} from './draw.js';
import {recaman} from './sequence.js';

const draw = new Draw();

function update({scale, limit}) {
  const seq = recaman(limit);
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
    arcs.push({left: left * scale, right: right * scale, side});
  }
  draw.update(arcs);
}

function onInput() {
  function getValue(id) {
    const el = document.getElementById(id);
    if (!el) {
      throw new Error('No el by id:' + id);
    }
    const value = parseInt(el.value, 10);
    if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error('Invalid value: ' + value);
    }
    if (value < 1) {
      throw new Error('May not scale or limit less than 1');
    }
    return value;
  }
  const scale = getValue('scale');
  const limit = getValue('limit');
  update({scale, limit});
}

document.getElementById('scale').addEventListener('input', onInput);
document.getElementById('limit').addEventListener('input', onInput);

update({scale: 5, limit: 67});