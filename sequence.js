export function recaman(limit) {
  if (limit < 1) {
    return [];
  }

  const seq = [0];
  for (let i=1; i<limit; i++) {
    const dist = i;
    const last = seq[seq.length-1];
    let candidate = last - dist;
    if (candidate < 0 || seq.includes(candidate)) {
      candidate = last + dist;
    }
    seq.push(candidate);
  }

  return seq;
}