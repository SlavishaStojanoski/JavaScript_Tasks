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

// // Nested Destructuring
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
// console.log('eeee', menu, start);

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

// Spread operators and rest DONE
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
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `your\'s pasta is with this ingredients: ${ing1} ${ing2} ${ing3}`
//     );
//   },
//   orderPizza: function (zadolzitelno, ...ostanato) {
//     console.log(zadolzitelno);
//     console.log(ostanato);
//   },
// };

// restaurant.orderDelivery({
//   time: '22:10',
//   address: 'Beogradska bb',
//   mainIndex: 1,
//   starterIndex: 3,
// });

// restaurant.orderPizza('mussrooms', 'ketchup', 'onion', 'olives');

// const ingredients = [
//   prompt('ingredient 1:'),
//   prompt('ingredient 2:'),
//   prompt('ingredient 3:'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const arr = [1, 5, 9];
// const badNewArr = [22, 33, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [22, 33, ...arr];
// console.log(newArr);
// console.log(...newArr);

// newArr[1] = 55;
// console.log(newArr);

// Objects DONE;
// const newRestaurant = { yearOpen: 1992, ...restaurant, owner: 'Slavisha' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Pizza-ITALIANO';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST because is left side of = DONE
// const arr = [1, 5, 6];
// const arr2 = [2, 5, ...arr];
// console.log(arr2);
// const [a, b, ...other] = [2, 5, 8, 9, 7, 20];
// console.log(a, b, other);

// Area;
// const [italiana, , vegetarian, , ...otherMenu] = [
//   ...restaurant.categories,
//   ...restaurant.starterMenu,
// ];
// console.log(italiana, vegetarian, otherMenu);
// // Object
// const { fri, ...otherDays } = { ...restaurant.openingHours };
// console.log(otherDays);

// function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(5, 7);
// add(2, 6, 10);
// const x = [1, 2, 3];
// console.log(...x);
// add(...x);

// console.log(0);

// restaurant.numGuest = 1;
// const guset = restaurant.numGuest ?? 10;
// console.log(guset);

// TODO CODING
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1. Create one player array for each team (variables 'players1' and
//    'players2')
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1,players2] = game.players
// console.log(players1);
// console.log(players2);
//  2. The first player in any player array is the goalkeeper and the others are field
//      players. For Bayern Munich (team 1) create one variable ('gk') with the
//      goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
//      field players
// const [[GK1, ...fieldPlayers1], [GK2, ...fieldPlayers2]] = [...game.players];
// console.log('GK for Buyern: ', GK1, ' and fielsPlayers:', fieldPlayers1);
// console.log('GK for : ', GK2, ' and fieldPlayers:', fieldPlayers2);
//  3. Create an array 'allPlayers' containing all players of both teams (22
//      players)
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
//  4.  During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//      new array ('players1Final') containing all the original team1 players plus
//      'Thiago', 'Coutinho' and 'Perisic'
// const bayern = (game.team1 = game.players[0]);
// const team1 = ['Thiago', 'Coutihno', 'Perisic', ...bayern];
// console.log(team1);
//  5. Based on the game.odds object, create one variable for each odd (called
//      'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
//  6. Write a function ('printGoals') that receives an arbitrary number of player
//      names (not an array) and prints each of them to the console, along with the
//      number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals was scored`);
// };
// printGoals(...game.scored);

// const foundDuplicate = function (...players) {
//   let counts = {};
//   for (let i = 0; i < players.length; i++) {
//     if (counts[players[i]]) {
//       counts[players[i]] += 1;
//     } else {
//       counts[players[i]] = 1;
//     }
//   }
//   for (let prop in counts) {
//     if (counts[prop] >= 2) {
//       console.log(prop + ' counted: ' + counts[prop] + ' times.');
//     }
//   }
//   console.log(counts);
// };

// foundDuplicate(...game.scored);

//  7.The team with the lower odd is more likely to win. Print to the console which
//      team is more likely to win, without using an if/else statement or the ternary
//      operator.
// team1 < team2 ? console.log('team1 is better') : console.log('team2 is better');

// HERE IS OBJECT OF RESTAURANT FOR SHORT HANDLE OF VIEW
// TODO
const restaurant = {
  name: 'pizza3',
  location: 'Gostivar',
  categories: ['Italiana', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruchetta', 'Grlic Bread', 'Capresa'],
  mainMenu: ['Pizza', 'Pasta', 'Risoto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      time,
      address,
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `your\'s pasta is with this ingredients: ${ing1} ${ing2} ${ing3}`
    );
  },
  orderPizza: function (zadolzitelno, ...ostanato) {
    console.log(zadolzitelno);
    console.log(ostanato);
  },
};

// Looping Array The FOR-OF loop DONE
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (let item of menu) console.log(item);

// for (let item of menu.entries()) {
//   console.log(item);
// }
// //with destructuring....

// for (let [item, element] of menu.entries()) {
//   console.log(`${item} : ${element}`);
//   console.log(' indeks e:', item);
// }

// OPtional Chaining DONE
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon.open) {
//   console.log(restaurant.openingHours.mon.open);
// }
// console.log(restaurant.openingHours.mon?.open);

// Property NAMES DONE
// for (let day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days: `;
// for (let days of properties) {
//   openStr += `${days}, `;
// }
// console.log(openStr);

// // Propery VALUES DONE
// const value = Object.values(restaurant.openingHours);
// console.log(value);

// // Entire Object DONE

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// TODO chalange

// #2 Let's continue with our football betting app! Keep using the 'game' variable from
//before.

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// for (let [goal, score] of game.scored.entries()) {
//   console.log(`goal ${goal + 1}: ${score}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let avg = 0;
// for (let odd of odds) {
//   avg += odd;
// }
// console.log((avg /= odds.length));

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names 😉

// for (let [t, value] of Object.entries(game.odds)) {
//   const teamStr = t === 'x' ? 'draw' : `victory ${game[t]}`;
//   console.log(`Odd of ${teamStr} ${value}`);
// }

// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }
// //

// const uniqueCount = [...game.scored];
// var scorers = {};
// uniqueCount.forEach(function (i) {
//   scorers[i] = (scorers[i] || 0) + 1;
// });
// console.log(scorers);

// SETS DONE
// const ordersSet = new Set(['pizza', 'pasta', 'pizza', 'risotto', 'pizza']);
// console.log(ordersSet);

// console.log(new Set('Slavisha'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('Bread');
// ordersSet.add('Bread');
// ordersSet.delete('pizza');

// console.log(ordersSet);

// MAP DONE
// const rest = new Map();
// rest.set('name', 'Forza Italy');
// rest.set(1, 'Baern M.');
// rest.set(2, 'Juventus');
// console.log(rest);

// rest
//   .set('categories', ['pizza', 'pasta', 'vegetarian', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);

// console.log(question);

// // COnvert Object to Map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (let [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// // const answer = Number(prompt('Your Answer'));
// // console.log(answer);

// // Solution by FROM ME
// // console.log(
// //   question.get('Correct') === answer ? question.get(true) : question.get(false)
// // );

// // Solution by course :D
// // console.log(question.get(question.get('Correct') === answer));

// // Conver Map to Array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3 TODO = DONE
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)

// const arrayEvents = new Set(gameEvents.values());
// console.log(arrayEvents);

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes `
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes `
// );

// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17:
// // ⚽
// // GOAL

// for (let [min, event] of gameEvents) {
//   var half = min <= 45 ? 'First' : 'Second';
//   console.log(`${half} Half ${min}: ${event}`);
// }

// Working with strings DONE
// const airline = 'TAP air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B546'[0]);

// console.log(airline.length);
// console.log('B546'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const chechMiddleSeat = (seat) => {
//   const s = seat;
//   if (s.slice(-1) === 'B' || s.slice(-1) === 'C') {
//     console.log('You got a middle seat');
//   } else {
//     console.log('Lucky');
//   }
// };
// chechMiddleSeat('11B');
// chechMiddleSeat('22C');
// chechMiddleSeat('21E');

// console.log(new String('Slavisha'));
// console.log(typeof new String('Slavisha'));
// console.log(typeof new String('Slavisha').slice(1));
