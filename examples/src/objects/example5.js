// @flow

import type { Point } from './example2';

type Point2D = {| x: number, y: number |};

({ x: 0, y: 0 }: Point2D);

function cast(p: Point2D): Point {
  return p;
}

cast({ x: 42, y: 666, z: "tee hee" });


