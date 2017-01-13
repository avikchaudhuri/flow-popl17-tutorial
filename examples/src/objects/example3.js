// @flow

import type { Point3D } from './example1';
import type { Point } from './example2';

function to3D(p: Point): Point3D {
  return { x: p.x, y: p.y, z: p.z || 0 };
}

function distance(p1: Point, p2: Point) {
  //p1 = to3D(p1);
  //p2 = to3D(p2);
  const sq = (n) => n * n;
  return sq(p1.x - p2.x) + sq(p1.y - p2.y) + sq(p1.z - p2.z);
}

