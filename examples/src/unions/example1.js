// @flow

type binary = 0 | 1;

function and(b1: binary, b2: binary): binary {
  return b1 * b2; // b1 && b2
}

