"use strict";

export const _firstName = new WeakMap();

export default class Init {
  constructor(name) {
    _firstName.set(this, name);
  }

  getname() {
    return _firstName.get(this);
  }
}

/*

const _fullName = new WeakMap();
const _age = new WeakMap();
const _job = new WeakMap();

class Worker {
  constructor(name, age, job) {
    _fullName.set(this, { name });
    _age.set(this, age);
    _job.set(this, () => {
      return `I am a ${job}`;
    });
  }


  get getName() {
    return _fullName.get(this).name;
  }

  getjob() {
    return _job.get(this)();
  }
}

*/

const protectprops = new WeakMap();

class Worker {
  constructor(name, birthyear, job) {
    protectprops.set(this, {
      // Protect Properties
      fullname: name,
      age: 2025 - birthyear,

      // Protect Method

      job: () => {
        return `I am a ${job} 🧑🏽‍💻`;
      },
    });
  }

  get getName() {
    return protectprops.get(this).fullname;
  }

  getjob() {
    return protectprops.get(this).job();
  }
}

export class Staff extends Worker {
  getinfo() {
    return this.getName;
  }
}
