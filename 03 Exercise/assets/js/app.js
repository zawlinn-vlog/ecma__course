"use strict";

console.log("--------- FIND ---------");

const users = [
  { name: "Aung Aung", age: 20 },
  { name: "Kyaw Kyaw", age: 21 },
  { name: "Tun Tun", age: 22 },
  { name: "Zaw Zaw", age: 23 },
  { name: "Linn Linn", age: 24 },
];

const filterUser = users.filter((val) => val.name == "Zaw Zaw");

console.log(filterUser);

const findUser = users.find((val) => val.name == "Zaw Zaw");

console.log(findUser);

const filterage = users.filter((val) => val.age > 22);

console.log(filterage);

const findAge = users.find((val) => val.age > 22);

console.log(findAge);

const posts = [
  {
    id: 1,
    title: "New Post One",
  },
  {
    id: 2,
    title: "New Post Two",
  },
  {
    id: 3,
    title: "New Post Three",
  },
];

const comment = { post_id: 1, mesage: "Nice post One", user_id: 10 };

const fUser = posts.find((val) => val.id == comment.post_id);

console.log(fUser);

const amounts = [10, 20, 30];

// mainarry.reduce(function(prev val, cur val){}, initial val)

// const amountRes = amounts.reduce((acc, cur) => acc + cur, 0);
const amountRes = amounts.reduce((acc, cur) => acc + cur, 0).toFixed(2);
console.log(amountRes);

const numbers = [10, 200, 30, 40, 50, 60, 70, 80, 90, 100, 500, 0];

const getMax = numbers.reduce((acc, cur) => {
  if (cur > acc) {
    return cur;
  }

  return acc;
}, 0);

console.log(getMax);

// some, every return boolean

const boys = ["aung aung", "kyaw aung", "zin aung", "soe aung", "moe aung"];

const everyboy = boys.every((boy) => boy.length === 9);

console.log(everyboy);

const somelen = boys.some((boy) => boy.length === 9);

console.log(somelen);
