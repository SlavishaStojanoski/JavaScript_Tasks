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
