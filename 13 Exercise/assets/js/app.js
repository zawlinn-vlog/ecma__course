// "use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `I am ${this.name} and I am ${this.age} Year old.`;
  }
}

class Student extends Person {
  constructor(name, age, lang) {
    super(name, age);
    this.language = lang;
  }
  study() {
    return `${super.getInfo()} I am studying ${this.language}!`;
  }
}

let personObj = new Person("Zawlinn", 28);

console.log(personObj.name);
console.log(personObj.age);
console.log(personObj.getInfo());

let studentObj = new Student("Saram", 29, "web Dev");

console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.getInfo());
console.log(studentObj.study());

/*
x = 200;

console.log(x); // working without strict mode

*/

let x = 200;

console.log(x);

function hi() {
  return this; // window obj return while using without use strict if use 'use strict' return undefined
}

console.log(hi());

const per = {
  name: "zaw linn",
  name: "Saram",
};

console.log(per.name); // return both the same

// NRW
// NAN

// CRN
// CAW

class Mobile {
  brand() {
    console.log(this);
  }
}

const mobileObj = new Mobile();

// Method call
mobileObj.brand(); // return both the same

const d = mobileObj.brand;

d();

// Constructor

// i. Factory Function

function info(val) {
  return {
    // Properties
    name: val,

    // Methods
    greet: function () {
      return `I am ${this.name} 👨🏽‍💻 !`;
    },
  };
}

const a = info("Saram");
console.log(a);
console.log(a.name);
console.log(a.greet());

// ii. Contructor Function

function Phone(name, price) {
  this.name = name;
  this.price = price;

  this.info = function () {
    return `The price of ${this.name} is ${this.price} !`;
  };
}

const Samsung = function (name, price, location) {
  console.log(this);
  Phone.call(this, name, price);

  this.location = location;

  this.makeby = function () {
    return `This ${this.name} is made by ${this.location} !`;
  };
};

const b = new Phone("Iphone", 2000);
console.log(b);
console.log(b.info());

const sam = new Samsung("Samsung", 2500, "China");

console.log(sam);
console.log(sam.info());
console.log(sam.makeby());

const e = b.info;

console.log(e());

// Method 3

const vehicle = new Function(
  `brand`,
  `
    this.brand = brand,
    this.like = function(){
      return 'I like ' + this.brand
    }
  `
);

const car = new vehicle("Toyota");

car.speed = 800;
car.model = 2025;
car.seat = 4;

console.log(car);

console.log(car.brand);
console.log(car.like());
console.log(Object.keys(car));
console.log(Object.values(car));

for (let key in car) {
  if (typeof car[key] != "function") {
    console.log(key + " : " + car[key]);
  }
}

console.log(false && "Zaw Linn"); // if false retrun imediately

console.log(true || "Saram"); // if true return imediately

console.log("" ?? "Abbas");

console.log(null ?? "Gulam"); // if null pass this value

console.log("#".repeat(10) + " Object Assign " + "#".repeat(10));

const target = { a: "red" };

const sor = { b: "Green", c: "Blue" };

Object.assign(target, sor);

console.log(target);
