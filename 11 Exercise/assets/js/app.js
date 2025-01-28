"use strict";

const action1 = Symbol("feature");
const action2 = Symbol("feature");
const ONSTATE = Symbol("on");
const OFFSTATE = Symbol("off");

const vehicle = {
  brand: "Toyota",
  madeby: "Japan",
  modal: "Toyata Crown 2018",
  [action1]: "crusie control",
  [action2]: "air-conditioner",
  state: ONSTATE,
  speed: 100,
  turnon: function () {
    this.state = ONSTATE;
  },
  turnoff() {
    this.state = OFFSTATE;
  },
  accelerate() {
    if (this.state == ONSTATE) {
      this.speed += 10;
    }
  },
};

console.log(vehicle);

for (const key in vehicle) {
  // key return
  console.log(key); // symbol key are ignore
}

console.log(vehicle.brand);
console.log(vehicle["madeby"]);
// console.log(vehicle.action1);
console.log(vehicle[action1]);

// OBJECT Functions

console.log(Object.keys(vehicle));

console.log(Object.getOwnPropertyNames(vehicle));

console.log(Object.getOwnPropertySymbols(vehicle));

// SYMBOL iterator

console.log(Symbol.iterator);
console.log(typeof Symbol.iterator);

const colors = ["red", "blue", "green"];

for (const value of colors) {
  // val return
  console.log(value);
}

console.log(colors.entries()); // array iterator
console.log(colors[Symbol.iterator]());

console.log("======== Entries ========");

const colorentries = colors.entries();

// console.log(colorentries.next());

console.log(colorentries.next().value[1]); // red
console.log(colorentries.next().value[1]); // blue
console.log(colorentries.next().value[1]); // green

console.log("======= Iterator ========");

const coloriterator = colors[Symbol.iterator]();

// console.log(coloriterator.next());

// console.log(coloriterator.next().value); // red
// console.log(coloriterator.next().value); // blue
// console.log(coloriterator.next().value); // green

let colorResult = coloriterator.next();

console.log(colorResult);

while (!colorResult.done) {
  console.log(colorResult.value);
  colorResult = coloriterator.next();
}

//

const name = new Set(["aung aung", "kyaw kyaw", "yu yu"]);

// console.log(name[Symbol.iterator]());

const nameIterators = name[Symbol.iterator]();

console.log(nameIterators.next());
console.log(nameIterators.next());
console.log(nameIterators.next());
console.log(nameIterators.next());

let students = new Set();

students
  .add("hla hla")
  .add("nu nu")
  .add("yoon yoon")
  .add("aung aung")
  .add("kyaw kyaw")
  .add("myo naing");

students.delete("myo naing");
console.log(students);
// students.clear()
console.log(students.has("myo myo"));

// => PRIMITIVE TYPE & REFERENCE TYPE

/*

Primitive Type

- string
- numbers
- boolean
- null
- undefined
- symbol

Reference Type

- All type of Objects
  (array, object, data, function, and other object)


*/

let val1 = 100;
let val2 = val1;

val1 = 300;

console.log("val1 value = " + val1, "val2 value = " + val2);

let obj1 = {
  name: "su su",
};

let obj2 = obj1; // obj2 point to obj (same memory reference)

obj1.name = "Tin Tin";

// obj2 = { name: "Yamon" };

console.log(obj1.name, obj2.name);

// => Object Literals

const clientOne = {
  // PROPERTIES
  userName: "Zaw Linn",
  email: "zawlinn.profile@gmail.com",

  // METHOD

  login() {
    console.log("Your are logged In");
  },

  logout() {
    console.log("Your are logged Out");
  },
};

const clientTwo = {
  // PROPERTIES
  userName: "Saram",
  email: "saram.profile@gmail.com",

  // METHOD

  login() {
    console.log("Your are logged In");
  },

  logout() {
    console.log("Your are logged Out");
  },
};

console.log(clientOne);
console.log(clientOne.userName, clientOne.email);
console.log(clientOne.login());
console.log(clientOne.logout());

console.log(clientTwo);
console.log(clientTwo.userName, clientTwo.email);
console.log(clientTwo.login());
console.log(clientTwo.logout());
