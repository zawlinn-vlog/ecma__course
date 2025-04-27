'use strict';

function Emplyee (name){
  this.fullname = name;
}

Emplyee.prototype.getName = function(){
  return `I am ${this.fullname}.`
}

function Manager(salary, name){

  Emplyee.call(this, name);

  this.salary = salary;
 
}

function Duty(position, salary, name){
  Manager.call(this,salary, name);
  this.position = position
}


Duty.prototype = Object.create(Emplyee.prototype);
Duty.prototype.constructor = Duty;
const dutyObj = new Duty('Washing', 3500, 'Abbas');

console.log(dutyObj);
console.log(dutyObj.getName());



Manager.prototype = Object.create(Emplyee.prototype);
Manager.prototype.constructor = Manager;


const emplyeeObj = new Emplyee('Zaw Linn Tun');

console.log(emplyeeObj);

console.log(emplyeeObj.getName());


const managerObj = new Manager(40000, 'Saram Tun');

// console.log(managerObj);



console.log(managerObj);

console.log(managerObj.getName());

const student = {
  name: 'Aung kyaw',
  age: 19,
  subjects: ['Myanmar', 'English', 'Math', 'Chemistry',  'Physic', 'Biology']
}

const wrapper = document.querySelector('.data-wrapper');

function displayMsg(obj){
  let html = ` 
  <h3 class="text-light">Student Name : ${obj.name}</h3>
  <p class="text-light">Student Age &mdash; ${obj.age} Years old. </p>
  <ul class="list-group">
  `;

  obj?.subjects?.map( (sub, ind) => {
    html += `<li class="list-group-item">Subject ${ind + 1} &mdash; ${sub}</li>`
  })

html += `</ul>`;

wrapper.insertAdjacentHTML('afterbegin', html);

return html;

}


console.log(displayMsg(student));

/* const htmlone = `
      <h3 class="text-light">Student Name : ${student.name}</h3>
      <p class="text-light">Student Age &mdash; ${student.age} Years old. </p>
      <ul class="list-group">
        <li class="list-group-item">x &mdash; ${student.subjects[0]}</li>
        <li class="list-group-item">Subject 02 &mdash; ${student.subjects[1]}</li>
        <li class="list-group-item">Subject 03 &mdash; ${student.subjects[2]}</li>
        <li class="list-group-item">Subject 04 &mdash; ${student.subjects[3]}</li>
        <li class="list-group-item">Subject 05 &mdash; ${student.subjects[4]}</li>
        <li class="list-group-item">Subject 06 &mdash; ${student.subjects[5]}</li>
      </ul>
`;
 document.querySelector('.data-wrapper').insertAdjacentHTML('afterbegin', htmlone);

 */

 