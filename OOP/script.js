'use strict';

//NEW CONSTRUCTOR FUNCTION
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2040 - this.birthYear);
  //   };
};

const Slavisha = new Person('Slavisha', 1992);
console.log(Slavisha);

// 1. New {} is creared
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 1966);
const sara = new Person('Sara', 2015);
console.log(matilda, sara);

console.log(Slavisha instanceof Person);

//NEW Static method
Person.hey = function () {
  console.log('hi ');
  console.log(this);
};

Person.hey();

//NEW PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2044 - this.birthYear);
};

Slavisha.calcAge();
matilda.calcAge();
sara.calcAge();

console.log(Slavisha.__proto__);
console.log(Slavisha.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Slavisha));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(Slavisha, matilda);

console.log(Slavisha.hasOwnProperty('firstName'));
console.log(Slavisha.hasOwnProperty('species'));

console.log(Slavisha.__proto__);
// Object.prototype(top od prototype chain)
console.log(Slavisha.__proto__.__proto__);
console.log(Slavisha.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [2, 5, 48, 18, 4, 4, 84, 2, 2, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);

// Your tasks: DONE
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
console.log(BMW);
const WV = new Car('WV', 100);
console.log(BMW);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}`);
};

BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();
WV.accelerate();
WV.accelerate();

BMW.brake();
BMW.brake();
BMW.brake();
WV.brake();
WV.accelerate();
WV.brake();
