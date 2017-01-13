// @flow

import { carla } from './example1';

function hello(you: { +name: string | Array<string> }) {
  you.name = [];
  // const name = you.name;
  // if (typeof name === "string") console.log(name);
  // else console.log(name.join(' '));
};

hello(carla);

