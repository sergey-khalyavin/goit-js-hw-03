'use strict';

// const human = {
//   name: 'Steve',
//   age: 25,
// };

// human.sex = 'Male';
// console.log(human);

// const key = 'age';
// console.log(human[key]);
// ===================================
// function getValue(obj, key) {
//   console.log(obj[key]);
// }

// getValue(human, 'age');
// getValue(human, 'name');

// ============
// create object
// ============
// function createHuman(name, age) {
//   return {
//     friend: 'Chris',
//     name: name,
//     age: age,
//   };
// }

// console.log(createHuman('Peter', 20));
// =====================================
// const human = {};
// const key = 'friend';

// human.name = 'Tom';
// human['age'] = 34; // eslint-disable-line
// human[key] = 'Chris';

// console.log(human);
// =======================
// const key = 'friend';
// const human = {
//   name: 'Dave',
//   age: 22,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// addYear(){
//   this.age+=1;
// }
//   sayBye() {
//     console.log(`Bye ${key}!`);
//   },
// };

// console.log(human.sayHello());
// console.log(human.sayBye());

// human.addYear()
// ==================================
// const human = {
//   name: 'Peter',
//   age: 25,
// };

// const keys = Object.keys(human);
// keys forEach(key => {
//   console.log('key:', key);
//   // console.log('')
// }
// )
// ==========================
// const human = {
//   tall: 185,
//   age: 25,
//   weight: 87,
// };

// const entries = Object.entries(human);
// console.log(entries);

// entries.forEach(item => {
//   console.log('key:', item[0]);
//   console.log('value:', item[1]);
// });
// +++++++++
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// // delete user.name;

// console.log(user);
// +++++++++++++

