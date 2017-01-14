// @flow
// (higher-order functions)

import positive from './example2';

function filterNumbers(arr: Array<number>, fun: (number) => boolean) {
  return arr.filter(fun);
}

console.log(filterNumbers([42, -42], positive));
