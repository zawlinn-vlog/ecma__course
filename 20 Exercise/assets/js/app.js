"use strict";
import Init from "./data.js";
import { _firstName } from "./data.js";
import { Staff } from "./data.js";

// Method 1

const initobj = new Init("Zaw Linn");

console.log(initobj);
console.log(initobj.firstName);
console.log(initobj.getname());

// Method 2

console.log(_firstName.get(initobj));

const staffObj = new Staff("Saram", 1997, "Sale Staff");

console.log(staffObj.getinfo());
console.log(staffObj.getjob());
