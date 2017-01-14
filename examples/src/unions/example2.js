// @flow
// (disjoint unions, recursive types, pattern matching)

type List<T> =
  | { kind: "nil" }
  | { kind: "cons", val: T, next: List<T> };

function length<T>(list: List<T>) {
  //if (list.kind === "nil") return 0;
  return length(list.next);
}

// function fold<T,S>(list: List<T>, acc: S, fun: (T, S) => S): S {
//   if (list.kind === "nil") return acc;
//   return fold(list.next, fun(list.val, acc), fun)
// }
