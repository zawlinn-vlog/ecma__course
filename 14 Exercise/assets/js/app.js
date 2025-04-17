"use strict";

// Your JavaScript code goes here
console.log("Hello, world!");

const obj = {
  name: "Saram",
  age: 28,
  getInfo: function () {
    return `I am ${this.name} and I am ${this.age} year old.`;
  },
};

console.log(Object.keys(obj)); // ["name", "age", "getInfo"]
console.log(Object.values(obj)); // ["Saram", 28, f]
console.log(Object.entries(obj)); // [["name", "Saram"], ["age", 28], ["getInfo", f]]

const obj2 = {
  fullname: "Zaw Linn",
  age: 30,
  study: function () {
    return `I am ${this.name} and I am Studying Web Dev Course.`;
  },
};

console.table(Object.assign(obj, obj2));
console.log(Object.keys(Object.assign(obj, obj2)));

const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { d: 4, e: 5, f: 6 };

const mergedObj = Object.assign({}, obj3, obj4);
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

console.log(Object.keys(mergedObj)); // ["a", "b", "c", "d", "e", "f"]
console.log(Object.values(mergedObj)); // [1, 2, 3, 4, 5, 6]
console.log(Object.entries(mergedObj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5], ["f", 6]]
console.log(Object.entries(mergedObj).length); // 6
