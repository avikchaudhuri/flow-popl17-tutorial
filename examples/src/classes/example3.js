// @flow

import type { Animal } from './example1';
import { carla } from './example1';

class Box<T: Animal> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  containsWho() { return this.value.who(); }
}

console.log(new Box(carla).containsWho());

