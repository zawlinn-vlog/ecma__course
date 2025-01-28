// "use strict";

const names = new Set();

names.add("aung aung");
names.add("kyaw kyaw");
// names.add("tun tun", "naung naung");
names.add("yu yu").add("nu nu").add("hla hla");

console.log(names);
console.log(names.size);
console.log(names[0]); // undefined

names.forEach((val) => console.log(val));

// This Keyword (static scope, lexical scope)

console.log(this);

function morning() {
  console.log("Good Morning");
  console.log(this);
}

morning(); // undefined with strict mode and parent obj with none strict mode

const afternoon = function () {
  console.log("Good Afternoon");
  console.log(this);
};

afternoon();

const evening = () => {
  console.log("Good Evening");
  console.log(this);
};

evening();

// setTimeout(function () {
//   console.log("Good Night");
//   console.log(this);
// }, 3000);

// setInterval(() => {
//   console.log("Good Midnight");
// }, 3000);

function outside() {
  const outerval = "Outer value";

  function inside() {
    console.log(outerval);
    console.log(this);
  }

  const inner = () => {
    console.log(outerval);
    console.log(this);
    // console.log(this.outerval);
  };

  inside();
  inner();
}

outside();

// => For Object
// Nameless Regular Funtction = this Work                                   NRW
// Nameless Arrow Founction = this not work (return window obj)             NAN

// callback Regular Function  = this Not Work                               CRN
// callback Arrow Function = this work                                      CAW

const obj1 = {
  name: "Kyaw Kyaw",
  age: 30,
  city: "Yangon",
  myFun1: function () {
    console.log(this);
  },
  myFun2: () => {
    console.log(this);
  },
};

obj1.myFun1();
obj1.myFun2();

const obj3 = {
  name: "Tun Tun",
  city: "Mawlamyine",
  job: "Engineer",
  salary: 500000,
  getname: function () {
    // console.log(this);
    const funOne = function () {
      console.log(this);
    };

    (() => {
      console.log(this, this.job);
    })();

    funOne();
  },
  getCity() {
    // console.log(this);
    const funTwo = () => console.log(this.city);
    funTwo();
  },

  getJob: () => {
    const funThree = function () {
      console.log(this);
    };

    funThree();
  },

  getSalary: () => {
    const funFour = () => console.log(this);

    funFour();
  },
};

obj3.getname();
obj3.getCity();
obj3.getJob();
obj3.getSalary();

/*

NRW - Nameless Regular Work
NAN - Nameless Arrow Not Work

CRN - Callback Regular Not Work
CAW - Callback Arrow Work

*/
