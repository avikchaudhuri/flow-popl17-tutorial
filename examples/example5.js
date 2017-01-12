// @flow

function length(x) {
  if (x == null) {
    return -1;
  }
  return x.length;
}

function printItems(y) {
  const len = length(y);
  for (let i = 0; i < len; i++) {
    console.log(`element ${i} is ${y[i]}`);
  }
}

printItems({ length: 'not a number' });
