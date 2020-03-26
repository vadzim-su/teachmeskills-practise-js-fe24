// Exercise 01: Given a huge array of integers. 7 >= N >= 0. Array fills almost the whole memory. Sort array to ascending order. Do not use `sort` function.

const sort = array => {
  newArr = [];
  for (; array.length; ) {
    let c = Math.min.apply(null, array);
    newArr.push(c);
    array.splice(array.indexof(c), 1);
  }
  return newArr;
};
