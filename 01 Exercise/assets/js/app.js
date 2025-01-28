"use script";

// var x = 100;
// x = 200;

// var x = 300; // 300

// console.log(x);

let y = 100;

// y = 200;

// let y = 300;

console.log(y);

const p = 100;

// p = 200; // Uncaught TypeError: Assignmane to constant variable.

// var p = 300; // Idntifier 'p' has already been declared

console.log(p);

if (true) {
  // Global & function Scope

  //   var num1 = 100;

  // Block Scope
  let num2 = 200;
  const num3 = 300;
}

// console.log(num1);
// console.log(num2); // ReferenceError: num2 is not defined
// console.log(num3); // ReferenceError: num2 is not defined

function printOne() {
  for (var x = 0; x < 5; x++) {
    console.log(x);
  }
  console.log(`x value is ${x}`);
}

printOne();

// function printTwo() {
//   for (let q = 0; q < 5; q++) {
//     console.log(q);
//   }
//   console.log(`q value is ${q}`);
// }

// printTwo();

// function printThree() {
//   for (const b = 0; b < 5; b++) {
//     console.log(b);
//   }
//   console.log(`x value is ${b}`);
// }

// printThree();

const arrcolors = ["red", "green", "blue"];

console.log(arrcolors);

arrcolors.push("black", "white", "grey");

console.log(arrcolors);

const person = {
  name: "Aung Aung",
  bio: function () {
    console.log("this is bio");
  },
  contact() {
    console.log("This is Contact");
  },
};

console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person.bio());
console.log(person.contact());

person.name = "Su Su";

console.log(person.name);

const otherName = "fullname";

person[otherName] = "Khin Su Su Hlaing";

console.log(person);
console.log(person["fullname"]);

let num1 = 100;

let num2 = 200;
console.log(`${num1 + num2}`); // 300
console.log(`${num1 > num2 ? "Yes" : "No"}`); // No

// => Function

let getFullName = function () {
  let firstName = "Aung";
  let lastName = "Tun Tun";
};

console.log(getFullName());

let firstName = "Ma Ma";
let lastName = "Mya";

let getNickName = (fname, lname) => fname + lname;
getNickName = (fname, lname) => `${fname} ${lname}`;
getNickName = (fname, lname) => `${fname} ${lname}`;

console.log(getNickName(firstName, lastName));
