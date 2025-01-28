// "use strict";

var name = "aung aung"; // storage in window obj

var city = "Yangon";

/*

=>  let and const are not added value to window Global Scope
  (In terminal)
=> var name = 'aung aung';
name; // aung aung
window.name; // aung aung
window; // extend window > name (yes)

=> let name = 'aung aung';
name; // aung aung
window.name; // undefined
window; // extend window > name (no)

=> const name = 'aung aung';
name; // aung aung
window.name; // undefined
window; // extend window > name (no)


*/

const items = {
  product: "iPhone 16",
  price: 2000,

  // NRW
  info: function () {
    return `${this.product} Price is base on ${this.price} USD.`;
  },

  // NAN
  discount: () => {
    return `Use ${this.price} USFD for ${this.product}! Get 20% cash back!`;
  },
};

console.log(items);
console.log(items.info());
console.log(items.discount());

const group = {
  members: ["aung aung", "su su"],
  groupname: "Fronted Designer",

  // NAN

  groupmembers: () =>
    console.log(`There are 2 members on this ${this.groupname}`),

  // NRW > CAW

  groupinfo: function () {
    return this.members.map((member) =>
      console.log(`${member} is on ${this.groupname} group.`)
    );
  },

  // NRW > CRN
  groupsay: function () {
    return this.members.map(function (member) {
      console.log(`${member} is key person on this ${this.groupname} group.`);
    });
  },
};

console.log(group);
group.groupmembers();
group.groupinfo();
group.groupsay();

const inventory = [
  { title: "Redbull", price: 2500 },
  { title: "Sponsor", price: 1500 },
];

function createItem(inventory) {
  return {
    inventory,
    itemValue: function () {
      return this.inventory.reduce((cur, acc) => (cur += acc.price), 0);
    },
  };
}

const getInventory = createItem(inventory);

console.log(getInventory);
console.log(getInventory.itemValue()); // 4000

const studentinfo = {};
studentinfo.name = "Yamone";
studentinfo.age = 25;
studentinfo["hobby"] = "Reading";
studentinfo["hobby"] = "Swimming";

console.log(studentinfo);

const feature1 = "feature";
const feature2 = "feature";

const car = {
  brand: "Toyota",
  madeby: "Japan",
  modal: "Toyata Crown 2018",
  [feature1]: "crusie control",
  [feature2]: "air-conditioner",
  state: "on",
  speed: 100,
  turnon: function () {
    this.state = "on";
  },
  turnoff() {
    this.state = "off";
  },
  accelerate() {
    if (this.state == "on") {
      this.speed += 10;
    }
  },
};

console.log(car);
car.accelerate();

console.log(car);

// => Symbol

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol1); // true
console.log(symbol1 === symbol2); // false (Symbol are always unique)

const symbol3 = Symbol("hello");
const symbol4 = Symbol("hello");

console.log(symbol3 === symbol3); // true
console.log(symbol3 === symbol4); // false (Symbol are always unique)

const mySymbol = Symbol();

const yourSymbol = Symbol("This is your Symbol");

console.log(mySymbol);
console.log(typeof mySymbol);
console.log(yourSymbol);
console.log(yourSymbol.toString());

const action1 = "feature";
const action2 = "feature";
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
vehicle.accelerate();

console.log(vehicle.speed);
