'use strict';
// NEW modern way to make OOP with CLASSES ES6

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype propery
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet = function () {
    console.log(`hey ${this.firstName}`);
  };
  get age() {
    return 2021 - this.birthYear;
  }
  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //NEW Static method
  static hey() {
    console.log('hi');
    console.log(this);
  }
}

const Slavisha = new PersonCl('Slavisha Stojanoski', 1992);
console.log(Slavisha);
Slavisha.calcAge();
console.log(Slavisha.age);

console.log(Slavisha.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

Slavisha.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1996);
//call the static method
PersonCl.hey();

// GETERS AND SETERS
const account = {
  owner: 'Slavisha',
  movements: [200, 451, 445, 812, 100],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 22;
console.log(account.movements);

// Creating prototype object on object
class PersonProto {
  calcAge = function () {
    console.log(2044 - this.birthYear);
  };
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven first';
// steven.birthYear = 1965;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1985);
// console.log(sarah);

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
console.log(me);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

//Chalange 2#
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed}`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed}`);
  };
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
console.log(ford.speedUS);

ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);

ford.speedUS = 20;
console.log(ford);

//NEW Inheritance Between Classes Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and a'm study ${this.course}`);
};

const john = new Student('John', 2001, 'Computer Science');
console.log(john);
john.introduce();
john.calcAge();

console.log(john.__proto__);
console.log(john.__proto__.__proto__);

console.log(john instanceof Student);
console.log(john instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// Coding Challenge #3
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge od ${this.charge}`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
