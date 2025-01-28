"use strict";

// Object

let person1 = {
  name: "Zaw Linn",
  age: 27,
  gender: "male",
};

console.log(person1);
console.log(person1.name);
console.log(person1["age"]);

person1.city = "Yangon";

console.log(person1);

let person2 = person1;

console.log(person2);

person2.hobby = "sport";

person2.age = 30;

console.log(person2, person1);

// let person3 = Object.freeze(person1);
let person3 = person1;

console.log(person3);

person3.phone = "09123456";
person3.age = 40;

console.log(person1, person2, person3);

// OBJECT DESTRUCTER

const employee = {
  name: "Yu Yu",
  position: "Graphic Designer",
  salary: 70000,
};
console.log(employee.name, employee.position, employee.salary);

const { name: n, position: pos, salary: sal } = employee;

console.log(n, pos, sal);

const employees = {
  name: "Thuzar Aung",
  company: "ABC Co.,ltd",
  address: "Yangon",
  posts: {
    officeStaff: {
      gender: "Female",
      salary: 600000,
    },
    driver: {
      gender: "Male",
      salary: 400000,
    },
  },
  links: {
    social: {
      mail: "hr@abc.com",
      facebook: "https://facebook.com/abccompany",
    },
  },
};

// console.log(employees.posts.officeStaff, employees.links);

const {
  address,
  posts: { officeStaff, driver },
  links,
} = employees;

console.log(driver, links, address);

const { mail: ml, facebook: fb } = employees.links.social;

console.log(ml, fb);

// Default Value

const configs = {
  width: 300,
  //   height: 200,
  color: "tomato",
};

const { width, color, height = 500, margin = "10px" } = configs;

console.log(width, color, height, margin);

const { bg: background = "white", p: padding = "20px", flex } = { bg: "black" };

console.log(background, padding, flex);

const student = {
  name: "Yadanar",
  address: {
    city: "Bago",
    country: "Myanmar",
  },
};

const {
  address: { city, country },
} = student;

console.log(city, country);

// Array

let male = "Aung Aung";
let female = "Su Su";
console.log(male, female);

const [per1, per2] = [female, male];

// Swapping Variable

[male, female] = [female, male];

console.log(male, female);

console.log(per2, per1);

const myNumbers = [100, 200, 300, 400, 500];

console.log(myNumbers[0], myNumbers[2]);

const [val1, val2, val3, ...others] = myNumbers;

console.log(val1, val2, val3, others);

const [num1, , , , num5] = myNumbers;

console.log(num1, num5);

// Default Number

const arrNumber = [100];

let [a = 600, b = 600, c = 700] = arrNumber;

console.log(a, b, c);

// Nested Destructing

const yourNums = [10, [20, 30, 40], 50];

// const [first, second, third] = yourNums;

// console.log(first, second);

let [first, [second, third, fourth], fifth] = yourNums;

[fourth, first] = [first, fourth];

console.log(first, fourth);
