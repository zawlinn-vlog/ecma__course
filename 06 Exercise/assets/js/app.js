"use strict";

// SPREAD OPERATOR

let val;
val = Math.max(11, 3, 5, 7, 9, 11, 13, 15, 17, 19, -20, 0);

console.log(val);

val = Math.min(11, 3, 5, 7, 9, 11, 13, 15, 17, 19, -20, 0);

console.log(val);

val = [10, 20, 30, 40, 50];

console.log(Math.max(val)); // NaN
console.log(Math.min(val)); // NaN

console.log(...val);

console.log(Math.max(...val)); // 50
console.log(Math.min(...val)); // 10

function sumResult(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumResult(1, 3, 4));

const numbers = [4, 5, 6];

console.log(sumResult(...numbers));

// => apply()

console.log(sumResult.apply(null, numbers));
console.log(Math.max.apply(null, val)); // NaN
console.log(Math.min.apply(null, val)); // NaN

function getVal(name1, name2, name3) {
  console.log(`Name1 result is = ${name1}`);
  console.log(`Name2 result is = ${name2}`);
  console.log(`Name3 result is = ${name3}`);
}

getVal("su su", "yu yu", "mya mya");
getVal(...["su su", "yu yu", "mya mya"]);
getVal.apply(null, ["su su", "yu yu", "mya mya"]);

const color = "Red";

console.log(color);
console.log(color.split(""));
console.log(...color);

getVal(color);
getVal(...color);
getVal(...["Red"]);
getVal(...[..."Red"]);
getVal(...["Red", "Green", "Blue"]);

// console.log(...123);

console.log(...[123, 445, 70, 80]);
console.log([..."123", ..."445", 70, 80]);
console.log([...[123], ...[445], 70, 80]);
console.log([...[123], [..."445"], 70, 80]);

// => Spread in Array

const phones = ["apple", "oppo", "vivo", "samsung"];
const cars = ["toyota", "suzuki", "mazda"];
const computers = ["mac", "aoc", "acer", "hp"];

let myOwn = [phones, cars, computers];

console.log(myOwn);

console.log([...phones, ...cars, ...computers]);

const infos = {
  name: "Honey Nway Oo",
  gender: "Female",
  age: 25,
};

const contacts = {
  phone: "091231231",
  city: "Yangon",
  hascar: true,
};

const profiles = {
  nickname: "Honey",
  age: 30,
};

let bio = { infos, contacts, profiles };
console.log(bio);

bio = { ...infos, ...contacts };

console.log(bio);
