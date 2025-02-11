"use strict";

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
