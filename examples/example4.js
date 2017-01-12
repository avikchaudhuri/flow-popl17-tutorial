// @flow

function length(x) {
  if (x == null) {
    return -1;
  }
  return x.length;
}

length("");
length([1,2,3]);
length(null);
