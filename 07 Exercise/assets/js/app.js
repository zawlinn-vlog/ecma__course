// "use strict";

const infos = {
  name: "Honey Nway Oo",
  gender: "Female",
  age: 25,
};

const contacts = {
  phone: "091231231",
  city: "Yangon",
  hascar: true,
};

const profiles = {
  nickname: "Honey",
  age: 30,
};

let bio = { infos, contacts, profiles };
console.log(bio);

bio = { ...infos, ...contacts, country: "Myanmar", age: 40, ..."yangon" };

console.log(bio);

const student = [..."Hello", { name: "Yu Yu" }];

console.log(student);

const persons = {
  name: "Hla Nu Htun",
  gender: "Female",
  age: 22,
};

const phone = "0912312331";
const country = "indonesia";
const key1 = "nickName";
const key2 = "favColor";

const customer = {
  ...persons,
  hascar: true,
  tel: phone,
  country: country,
  [key1]: "Hla Nu",
  [key2]: "Pink",
};

console.log(customer);

const keyAssign = (obj, key, val) => {
  const getJob = obj;
  getJob[key] = val;

  console.log(getJob);

  const getJob2 = {
    ...obj,
  };

  getJob2[key] = val;

  console.log(getJob2);

  const getJob3 = {
    ...obj,
    [key]: val,
  };

  console.log(getJob3);
};
keyAssign(customer, "job", "Developer");

// Argument Object

// Note : Argument object can't set in arrow function

function getName(first, last) {
  console.log(first, last);
}

getName("Su Su", "Myat");

function getFullName(first, middle, last) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(first, middle, last);
}

// console.log(getFullName("Zaw", "linn", "Tun"));

function getCountry() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

getCountry("Thailand", "Sirilanka", "India", "China");

// const getcity = () => {
//   console.log(arguments);
// };

// getcity("Bago");
