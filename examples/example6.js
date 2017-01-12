// @flow

function length(x) {
  return x.length;
}

export function printItems(y: string | Array<string>) {
  const len = length(y);
  for (let i = 0; i < len; i++) {
    console.log(`element ${i} is ${y[i]}`);
  }
}
