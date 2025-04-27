"use strict";

// call(), apply()

const person = {
  name: "Kyaw Kyaw",
};

function greet() {
  console.log(`Hello, My name is ${this.name}`);
}

greet.call(person);
greet.apply(person);

function introduce(msg) {
  console.log(`Hello, ${this.name} said, ${msg}`);
}

introduce.call(person, "Nice to meet you");
introduce.apply(person, ["Welcome back to my city."]);

const student = {
  name: "Zaw linn",
  age: 28,
  setage() {
    this.age = 29;
  },
};

const staff = {
  name: "Shwe Zin",
  age: 16,
};

console.log("Age is - ", student.age);

console.log(staff.age);

student.setage.call(staff);

console.log(staff.age);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, city) {
  Person.call(this, name, age);

  this.city = city;
}

function Emplyee(name, age, city) {
  Person.apply(this, [name, age]);
  this.city = city;
}

const emplyeeObj = new Emplyee("Zawlinn", 28, "Mae Sot");
const studentObj = new Emplyee("Saram", 18, "Mae Sot");

console.log(emplyeeObj);
console.log(studentObj);

// => bind()

// const fun = originalfunction.bint(thisarg, arg1, arg2,...)

const member = {
  name: "Aye Aye",
  greet: function (city = "") {
    console.log(
      `Hello, my name is ${this.name}!${city ? " I live in " + city + "." : ""}`
    );
  },
};

const user = {
  name: "Aung Kyaw",
};

member.greet();

const funone = member.greet.bind(user);

funone("Mae Sot");

const newarr = new Array("name", "age", 400, true);

console.log(newarr);

const newobj = new Object();

newobj.name = "Zawlinn";
newobj.age = 28;
newobj.status = "Single";
newobj.job = "Sale man";

console.log(newobj);

// Method 1

console.log(Object.getPrototypeOf(newobj));

// Method 2
console.log(newobj.__proto__);

console.log(Object.getOwnPropertyDescriptor(newobj, "name"));

/*

value = 'val
writable = true/false (modified or not)
enumerable = true/false (can loop or not)
configurble = true/false (Delete or not)

*/

// => Defined

Object.defineProperty(newobj, "age", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// delete newobj.age; // doesn't work

for (let i in newobj) {
  console.log(newobj[i]);
}

console.log(Object.getOwnPropertyDescriptor(newobj, "age"));

const book = {};

Object.defineProperties(book, {
  title: {
    value: "JavaScript Essentials",
    writable: false,
  },
  price: {
    value: 30000,
    writable: true,
  },
});

console.log(book);

class Emplyees{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }


}

const emplyeesObj = new Emplyees('Zaw Linn', 28);

console.log(emplyeesObj);
console.log(emplyeesObj.name);
console.log(emplyeesObj.age);
console.log(emplyeesObj.hasOwnProperty('name'));
console.log(emplyeesObj.hasOwnProperty('age'));


class Car{

  #price;
  constructor(brand, price){
    this.brand = brand;
    this.#price = price;
    this.greet = function(){
      return `hello`;
    }
  }

  getPrice(){
    return this.#price;
  }

  
}


Car.prototype.getBrand = function(){
  return this.brand;
}


const carObj = new Car('Toyota',23000);

console.log(carObj);

console.log(carObj.getBrand());
console.log(carObj.getPrice());

console.log(Car.hasOwnProperty('getBrand'));
console.log(carObj.hasOwnProperty('greet'));
console.log(Object.getPrototypeOf(carObj).hasOwnProperty('getPrice'));

