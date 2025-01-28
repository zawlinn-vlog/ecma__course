// "use strict";

function getNumber() {
  let result = 0;

  for (const arg of arguments) {
    result += arg;
  }

  return result;
}

console.log(getNumber(10, 20, 30, 40, 50));

function totalResults() {
  console.log(arguments);
  let result = 0;

  for (const arg of arguments) {
    result += arg;
  }

  return result;
}

console.log(totalResults(10, 20, 30, 40, 50));

const amounts = [10, 204, 400, 500, 1923];

console.log(totalResults(...amounts));

const totalValues = amounts.reduce((acc, cur) => (acc += cur), 0);

console.log(totalValues);

function sumResults() {
  // return arguments; not pure arry

  // const sumReult = [...arguments].reduce((acc, cur) => (acc += cur), 0);
  const sumReult = Array.from(arguments).reduce((acc, cur) => (acc += cur), 0);

  return sumReult;
}

console.log(sumResults(10, 20, 40, 203, 20));

function calculate() {
  sum = [...arguments];
  return sum;
}

console.log(calculate([10, 20, 40, 203, 20]));
console.log(calculate(...[10, 20, 40, 203, 20]));

function colorLists() {
  return [...arguments].map((val, ind) => {
    return `${++ind} is ${val} color.`;
  });
}

console.log(colorLists("red", "green", "blue"));

// Arguments Object

const carObj = {
  brand: "Toyota",
  model: "Crown",
  engine: "Petrol",
  gearbox: "auto",
};

function taxi1({ brand, model, engine, gearbox, price = 10000 }) {
  console.log(brand, model, engine, gearbox, price);
}

taxi1(carObj);

// const carArrs = ["Honda", "HondaFit", "Suzuki", "Auto"];
const carArrs = ["Honda", , "Suzuki", "Auto"];

function taxi2([brand, model = "X9", engine, gearbox, price = 10000]) {
  console.log(brand, model, engine, gearbox, price);
}

taxi2(carArrs);

const colors = ["red", "green", "red", "blue", "blue"];

console.log(colors);
console.log(colors.length);

const colorSet = new Set(colors);
console.log(colorSet);
console.log(colorSet.size);
console.log(typeof colors, typeof colorSet);
console.log(Array.from(colorSet));
console.log([...colorSet]);
