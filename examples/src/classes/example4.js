// @flow

class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  who() { return this.name; }
  poke(): Animal { return this; }
  // poke(): this { return this; }
}
class Cat extends Animal {
  jump() { }
}

const carla = new Cat("carla");
carla.poke().poke().jump();

