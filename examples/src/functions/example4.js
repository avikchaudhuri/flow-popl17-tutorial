// @flow

function filter<T>(arr: Array<T>, fun: (T) => boolean) {
  return arr.filter(fun);
}

console.log(filter(["hello", 666, "hello world"], (s) => s.length > 6));
