"use strict";

const sayname = (name) => console.log(`${name}`);

sayname("Aung Aung");

const saycity = (city) => console.log(`Hello ${city}`);

saycity("Mandalay");

const sayphone = (phone) => console.log(`Hello ${phone}`);

sayphone("097820626");

const callname = (name) => console.log(`Hello ${name}`);

sayphone("Su Su");

let getNum = () => {
  let num1 = 200;

  return num1;
};

console.log(getNum());

let getNumber = (num1 = 100, num2 = 200) => {
  const result = num1 + num2;
  return result;
};

console.log(getNumber(10, 50));
console.log(getNumber(10));
console.log(getNumber());

// Iteration

/*
=> Array Callback Method

forEach
Map
Filter
Reduce
Find
some
every


*/

// for(let i = 0; i < arr.length; i++){
//     code to execute
// }

// for (let arr in obj) {
//   console.log(obj);
// }

// for (let key of arr){
//     code to execute
// }

console.log("------- FOR LOOP --------");

let myColors = ["red", "green", "blue", "orange", "grey"];

for (let i = 0; i < myColors.length; i++) {
  console.log(myColors[i]);
}

const customers = {
  name: "Aung Aung",
  city: "Mandalay",
  parent: "U Ba",
  phone: "0123456",
};

for (let key in customers) {
  console.log(customers.key);
  console.log(customers[key]);
}

const members = ["su su", "lu lu", "nu nu", "yu yu"];

for (let x of myColors) {
  console.log(x);
}

const ourTeams = ["Kyaw Kyaw", "Aung Aung", "Zaw Zaw", "Tar gyi"];

for (let x in myColors) {
  console.log(x);
}

myColors.forEach(function (val, ind, arr) {
  console.log(`${ind + 1} of Value is ${val}.`);
});

ourTeams.map((val, ind) => console.log(`${ind + 1} of member is ${val}.`));

const aa = ourTeams.map((val) => val.toLowerCase());

console.log(ourTeams, aa);

const modiName = ourTeams.map((val) => `Mr.${val}`);

console.log(modiName);

const newNames = ourTeams.map((val) => `Mr.${val}`); // Can't set!!! forEach not working

const employees = [
  "nan nan",
  "lu lu",
  "nu nu",
  "yu yu",
  "phyu phyu",
  "nyo nyo",
];

// const arr1 = employees.filter((val) => val.endsWith("u"));

const arr1 = employees
  .filter((val) => {
    if (val == "nu nu") return false;
    return true;
    // if (val == "nu nu") return false;
    // else return true;
  })
  .map((val) => `Mr.${val}`);

console.log(arr1);

const sport = "bike";

const winners = employees.map((val, ind) => ({
  name: val,
  //   game: sport,
  sport,
  price: ++ind,
}));

console.log(winners);

const ages = [20, 25, 21, 17, 35, 16, 50, 17, 80, 10, 18, 12, 15, 37];

const getOver18 = ages.filter((age) => age > 18);

console.log(getOver18);
