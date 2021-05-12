'use strict';
// TODO = DONE
// Chalange from javascript udemy course for debuging

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

// var data1 = [17, 21, 23];
// var data2 = [12, 5, -5, 0, 4];
// const printForecast = (arr1, arr2) => {
//   let str = '';
//   let data3 = arr1.concat(arr2);
//   //   console.log(data3);
//   for (let i = 0; i < data3.length; i++) {
//     str += `${data3[i]}\xB0C in {i+1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1, data2);

//

// console.log(add(2, 2));
// console.log(addexp(2, 2));
// console.log(addarr(2, 2));

// function add(a, b) {
//   return a + b;
// }
// const addexp = function (a, b) {
//   return a + b;
// };
// const addarr = (a, b) => {
//   return a + b;
// };
// console.log(card);

// if (!card) deleteShopingCards();

// var card = 10;
// function deleteShopingCards() {
//   console.log('All Cards is deleted');
// }

// Destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// Destructuring array DONE
// const restaurant = {

//   name: 'pizza3',
//   location: 'Gostivar',
//   categories: ['Italiana', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruchetta', 'Grlic Bread', 'Capresa'],
//   mainMenu: ['Pizza', 'Pasta', 'Risoto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainMenu] = restaurant.order(3, 2);
// console.log(starter, mainMenu);

// Nested Destructuring
// let nest = [2, 4, [8, 10, [11, 12]]];
// nest[1] = 5;
// let [a, b, [c, d, [e, f]]] = nest;
// console.log(a, b, c, d, e, f);

// Destructuring OBJECT DONE
// const restaurant = {
//   name: 'pizza3',
//   location: 'Gostivar',
//   categories: ['Italiana', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruchetta', 'Grlic Bread', 'Capresa'],
//   mainMenu: ['Pizza', 'Pasta', 'Risoto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
//     console.log(
//       time,
//       address,
//       `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: '22:10',
//   address: 'Beogradska bb',
//   mainIndex: 1,
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: start = [] } = restaurant;
// console.log(menu, start);

// // Mutating Variables
// let a = 10;
// let b = 15;

// const newObj = { a: 22, b: 11, c: 55 };
// ({ a, b } = newObj);
// console.log(a, b);

// // Nested Object
// const {
//   fri: { open: o, close: c },
// } = hours; //hours become from desructured object restaurant like a value of properti openingHours
// console.log(o, c);
