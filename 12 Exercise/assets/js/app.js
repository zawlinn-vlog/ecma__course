"use strict";

/*
const Car = function (companyName, produceYear) {
  this.name = companyName;
  this.year = produceYear;
};

Car.prototype.getinfo = function () {
  console.log(`${this.name} is produce in ${this.year}.`);
};

const Germeny = function (companyName, produceYear, location = "Germeny") {
  Car.call(this, companyName, produceYear);
  this.country = location;
};

Germeny.prototype = Object.create(Car.prototype);

const toyota = new Car("Toyota", 1997);
const wagon = new Germeny("Wagon", 1991);

console.log(wagon);

console.log(toyota);

toyota.getinfo();

wagon.getinfo();

let count = 0;

function getVal() {
  count++;
  return {
    next: function () {
      return count <= 3 ? { value: count, done: false } : { done: true };
    },
  };
}

console.log(getVal().next());
console.log(getVal().next());
console.log(getVal().next());
console.log(getVal().next());

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen1 = gen();

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

const url = "https://jsonplaceholder.typicode.com/posts";

function loadData() {
  const xhr = new XMLHttpRequest();

  return new Promise((res, rej) => {
    xhr.onload = function () {
      if (this.status === 200) {
        res(this.responseText);
      } else {
        rej(this.error);
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });
}

// const getData = loadData();

// getData.then((res) => console.log(res));

// console.log(getData);

async function getData() {
  const obj = await loadData();
  console.log(obj);
}

getData();
*/
/*
class User {
  constructor(username, eamil) {
    // properties
    this.username = username;
    this.eamil = eamil;
  }

  // instance method

  login() {
    console.log(`You are Logged in`);
  }

  logout() {
    console.log(`You are logged out`);
  }
}

const userOne = new User("zawlinn", "zawlinn.profile@gmail.com");
const userTwo = new User("saram", "saram.profile@gmail.com");
const userThree = new User("gulam", "gulam.profile@gmail.com");

console.log(userOne, userTwo);

console.log(userOne.username, userOne.eamil);
userOne.login();

console.log(userTwo.username, userTwo.eamil);
userTwo.logout();

console.log(userThree.username, userThree.eamil);
userThree.login();

class Employee {
  constructor(name) {
    this.name = name;
    this.codes = function () {
      return "PHP.Laravel.React";
    };
  }

  salary = (amount, currency) => {
    return `${amount}${currency} per Month`;
  };

  contact() {
    return `No.10, Shwebo St, Mandalay.`;
  }

}*/

/*

  class

    - PascalCase only use in class name (OOP)
    - camelCase
    - snake_case


  new keyword can do three things;
    1. to create an Empty Obj
    2. bind parameter to argument (this keyword is the main article)
    3. to initiate an Obj constructor function

*/

/*
const employeeObj = new Employee("zawlinn");

console.log(employeeObj);

console.log("MY Programming Language : ", employeeObj.codes());
console.log(employeeObj.salary(400, "$"));
console.log(employeeObj.contact());

*/
/*
class Person {
  constructor(firstname, lastname, city) {
    this.fname = firstname;
    this.lname = lastname;
    this.home = city;
  }

  getfullName(title) {
    return `${title < 1 ? "Mr." : "Mrs."} ${this.fname} ${this.lname} `;
  }
}

const personObj = new Person("zawlinn", "Tun", "Mae Sot");

console.log(personObj);

console.log(personObj.getfullName(0));
console.log(personObj.getfullName(1));

const personObj2 = new Person("Saram", "Tun", ["Mae Sot", "Myawady"]);

console.log(personObj2, personObj2["home"][0]);

class Gamer {
  constructor(username) {
    this.username = username;
    this.point = 0;
  }

  login() {
    console.log(`${this.username} just logged in.`);
    return this; // Enabled Chaining.
  }
  logout() {
    console.log(`${this.username} just logged out.`);
    return this;
  }

  earnpoint() {
    this.point += 10;

    console.log(`${this.username} earns ${this.point}`);
  }
}

const gamer1 = new Gamer("saram");

console.log(gamer1);

// gamer1.login();
// gamer1.logout();
// gamer1.earnpoint();

gamer1.login().earnpoint();

*/
class Person {
  constructor() {
    this.info = {};
  }

  setName(name) {
    this.info.username = name;
    return this;
  }
  setAge(age) {
    this.info.age = age;
    return this;
  }
  setCity(city) {
    this.info.city = city;
    return this;
  }
  getInfo() {
    return this.info;
  }
}

const user = new Person();

console.log(user);

console.log(user.setName("saram").setAge(33).setCity("Mae Sot").getInfo());

// console.log(
//   user.info.username.replace(
//     user.info.username[0],
//     user.info.username[0].toUpperCase()
//   )
// );

// Coalescing Operator (??) Available in Language lik PHP, javascript and python

// syntax (null, undefined)

// $vale = $val1 ?? $val2

let fullname = "Zawlinn";
let nickname = null;

let result1 = nickname ?? fullname;
console.log(result1);

// Undefined

let age;
const currentage = 20;

console.log(age ?? currentage);

// Optional Chaining Operator (?.)

//syntax
// object?.property
// object?.[expression]
// object?.method()

const students = {
  name: "Zaw linn",
  address: {
    city: "Mae Sot",
    country: "Thailand",
  },
};

console.log(students?.name);
console.log(students?.contact?.phone); // undefined

// Accessing Array Elements

let staff = [{ name: "Zaw Linn" }, null, { name: "Saram" }, undefined];

console.log(staff[0]);

for (let i of staff) {
  if (i?.name) console.log(i?.name);
}

let em = {
  sayHi() {
    return "Hello Boss!";
  },
};

console.log(em?.sayHi()); // Hello Boss!

console.log(em?.sayGoodbye?.()); // undefined

let users = {
  setting: {
    theme: "dark Mode",
  },
};

let key = "theme";

console.log(users?.setting?.theme);
console.log(users?.setting?.[key]);
console.log(users?.config?.[key]);

let worker = {
  nrc: "10/thahtana(N)212285",
  passport: null,
  // passport: {
  //   type: "PJ",
  // },
};

console.log(worker?.nrc ?? "NO NRC");
console.log(worker?.passport ?? "NO Passport");
console.log(worker?.passport?.type ?? "NO Passport");

// class inheritance

class Obj1 {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getFullName = (title) => {
    return `Username: ${this.username} and Password: ${this.password}`;
  };
}

class Obj2 extends Obj1 {
  constructor(username, password, city) {
    super(username, password);
    this.city = city;
  }

  getInfo(country) {
    return `Mr.${this.username} live in ${country}`;
  }
}

const a = new Obj1("Saram", "Microphone@317");

const b = new Obj2("zawlinn", "Oxford@317", "Mae Sot");

console.log(b);
console.log(b.getFullName());

console.log(b.getInfo.call(a, "Thailand"));

console.log(b.getInfo.apply(a, ["Malaysia"]));

console.log(b.getInfo.bind(a)("United State of America"));
