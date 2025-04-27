'use strict'

console.log('This is Data Script!');

 let fullname = 'Zaw Linn Tun';

 let birthYear  = 1997;

//  let bio  = {
//     fullname,
//     age: 2025 - birthYear,
//     job: "Freelancer"
// }


// export {fullname};
// export {fullname as fname};

// export {fullname as default}


// export default [fullname, birthYear, bio]

export default {
    fullname,
    age: 2025 - birthYear,
    job: "Freelancer"
}