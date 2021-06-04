// NEW
// Default Parametars

// const bookings = [];

// const createBooking = function (
//   fligntNum,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 100;

//   const booking = {
//     fligntNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('E92');
// createBooking('E92', 2);
// createBooking('E92', 4, 500);
// createBooking('E92', undefined, 500);

// -----------------------------------------END---------------------------------------------------

// NEW
//  How Passing Arguments Works Value vs. Reference
// JavaScript passing arguments only like a value

// const flight = 'LH945';
// const passenger = {
//   name: 'Slavisha Stojanoski',
//   passport: 589575,
// };

// const checkIn = function (fligntNum, passenger) {
//   fligntNum = 'SK558'; // this can't change, cause it is primitive arguments in function
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 589575) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// // checkIn(flight, passenger);
// // console.log(flight);
// // console.log(passenger);

// //passenger change pasport
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 25);
// };
// // Here is wrong pass,cause passenger change passport then checkIn function called
// newPassport(passenger);
// checkIn(flight, passenger);

// -------------------------------------------END-------------------------------------------------

// NEW
// Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join();
// };

// // High-order function
// const transformer = function (str, fn) {
//   console.log(`Orginal string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer('JavaScript is crazy', oneWord);
// transformer('JavaScript is crazy', upperFirstWord);

// // another interesting example
// const high5 = function () {
//   console.log('Helooo !!!');
// };
// document.body.addEventListener('click', high5);
// ['SLavisha', 'Martha', 'Jonh'].forEach(high5);

// -------------------------------------------END-------------------------------------------------

// NEW
// Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`greet function ${greeting} /n returned function: ${name}`);
//   };
// };

// const greeterHay = greet('HI');
// //When calling greet function in fact we return second function and then "greet" is no more function it is a
// //value "function"
// //then we store this value in varable with name and this name actually is a second function ;)
// greeterHay('slavisha');
// greeterHay('Stojanoski');
// //Short way this work like this
// greet('Slavisha')('Stojanoski');

// //ES6 allow us to use this in one line with arrow function
// const greetStr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetStr('Hello')('John');

// -------------------------------------------END-------------------------------------------------

// NEW
// The call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
//   },
// };

// // console.log(lufthansa);

// lufthansa.book(452, 'Slavisha');

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EU',
//   bookings: [],
// };

// // Call method
// const book = lufthansa.book;
// //////////book(555, 'Someone');
// book.call(euroWings, 488, 'Someone');
// console.log(euroWings);
// book.call(lufthansa, 225, 'Maria');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Transport',
//   iataCode: 'CH',
//   bookings: [],
// };

// book.call(swiss, 455, 'Slavisha');
// console.log(swiss);

// //Apply method
// const flightData = [459, 'Jesica Noer'];
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData);

// // The bind Method
// // bindin function for using just for one singe object(data)
// const bookLH = book.bind(lufthansa);
// const bookEU = book.bind(euroWings);
// const bookCH = book.bind(swiss);

// bookLH(454, 'Aleksa Cukerini');

// // bind function just for exactly one object with exactky fly number
// const book23 = book.bind(euroWings, 23);
// book23('Slavisha Stojanoski');
// book23('Bozidar Micoski');

// // With Event Listeners
// lufthansa.plane = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.plane++;
//   console.log(this.plane);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.18, 200));

// // addVAT = value + value * 0.23;
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// // #CHALANGE TO THIS WITH FUNCTION WHO RETURN FUNCTION
// const taksa = (rata) => {
//   return function (value) {
//     console.log(value + value * rata);
//   };
// };

// const MKtaksa = taksa(0.18);
// MKtaksa(400);

// -------------------------------------------END-------------------------------------------------//

// # Chalange TODO = DONE
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //   Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option Number)`
      )
    );
    console.log(answer);
    // Register answer
    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll resultsare ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  [5, 2, 3]
//  [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// -------------------------------------------END-------------------------------------------------//

// NEW
// Immediately Invoked Function Expressions (IIFE)

// (function () {
//   console.log('This string executed just once');
// })();

// (() => console.log('And this arrow fun ex.. once'))();

// {
//   const private = 55;
//   let private = 15;
//   var notPrivate = 20;
// }
// // console.log(private);
// console.log(notPrivate);

// -------------------------------------------END-------------------------------------------------//

// NEW
// Closures
// const secureBooking = function () {
//   let passengers = 0;
//   return function () {
//     passengers++;
//     console.log(`${passengers} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// More Closure examples

// Example 1
// let f;

// const g = function () {
//   const a = 20;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 120;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There a 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Boarding will start in ${wait} seconds`);
// };

// boardPassengers(180, 4);

// -------------------------------------------END-------------------------------------------------//

//Chalange TODO = DONE
/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

// -------------------------------------------END-------------------------------------------------//
