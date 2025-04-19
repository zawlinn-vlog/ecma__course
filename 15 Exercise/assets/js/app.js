"use strict"

/*

Modifier        Syntax        Inside Class      Subclass      Outside Class
Public          this.name     Yes               Yes           Yes
Private         #name         Yes               No            No
Protected       _name         Yes               Yes           possible

*/


class Person{

    name;
    age;

    constructor(fullname, birthdate){
        this.name = fullname;
        this.age = 2025 - birthdate;
    }

    getInfo(){
        return `I am ${this.name} and I am ${this.age} Years Old!`
    }
}

class Student extends Person{
    #study;

    constructor(name,age){
        super(name,age)
    }

    setInfo(sub){
        this.#study = sub;
    }

    getInfo(){
        return `${super.getInfo()} and I am Studying ${this.#study} Now!`
    }


}

class Worker extends Person{

    _job;

    constructor(name,age){
        super(name,age)
    }

    setJob(job){
        this._job = job;
    }


    getJob(){
        return `My Job is a ${this._job}`;
    }
}


const personObj = new Person('Zaw Linn Tun' , 1997)

console.log(personObj);

const studentObj = new Student('Saram Tun',1997);

studentObj.setInfo('Web Development course');

console.log(studentObj);

console.log(studentObj.getInfo());

const workerObj = new Worker();

workerObj.setJob('staff');

console.log(workerObj.getJob());

