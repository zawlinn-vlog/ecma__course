"use strict";

const colors = ["red", "green", "blue", "white", "black"];

console.log(colors[0]);
console.log(colors[3]);
console.log(colors[4]);

for (const color of colors) {
  console.log(color);
}

const arrs = colors.entries();

// console.log(arrs.next());
// console.log(arrs.next().value[1]);
// console.log(arrs.next().value[1]);
// console.log(arrs.next().value[1]);
// console.log(arrs.next().value[1]);
// console.log(arrs.next().value[1]);
// console.log(arrs.next().value[1]);

// for (const color of arrs) {
//   console.log(`Index is ${color[0] + 1} and value is ${color[1]}`);
// }

for (const [ind, val] of arrs) {
  console.log(`Index is ${ind + 1} and value is ${val}`);
}

// REST PARAMETER (...)
// Note: Can't set first and between

function city(...val) {
  return val;
}

console.log(city());
console.log(city("Yangon"));
console.log(city("Yangon", "Mandalay", "Indonesia"));

function place(location, ...vals) {
  // return location;
  return vals;
}

console.log(place());
console.log(place("Yangon"));
console.log(place("Yangon", "Mandalay", "Indonesia"));

function getInfo(first, last, ...cities) {
  console.log(`This is first name = ${first}`);
  console.log(`This is last name = ${last}`);
  console.log(`This is cities name = ${cities}`, cities);
}

getInfo("Zawlinn", "Tun", "MaeSot", " Myawady", " Thaton");

function sumResult(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }

  return total;
}

console.log(sumResult(10, 20, 30, 40, 50));

function totalResult(...nums) {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  });
}

console.log(totalResult(10, 20, 30, 40, 50));
