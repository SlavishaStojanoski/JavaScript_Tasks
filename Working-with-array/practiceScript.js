///////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// -------------------------------------------END-------------------------------------------------//

// NEW
//Slice
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(arr.length - 1));
// //Splice
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(-1));
// arr.splice(0);
// console.log(arr);
// // Reverse;
// // arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 's', 'h', 'd', 'g'];
// console.log(arr2.reverse());
// console.log(arr2);
// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// const xx = ['2', 'd', 'd', 'f', ...arr2];
// console.log(xx);
// // Join
// console.log(letters.join(' - '));

// -------------------------------------------END-------------------------------------------------//

// NEW
// Looping Arrays forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('----FOR of----');
// for (let [i, movement] of movements.entries()) {
//   // console.log(movements);
//   if (movement > 0) {
//     console.log(`Movements ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movements ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----forEach-----');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movements ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movements ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// });

// -------------------------------------------END-------------------------------------------------//

// NEW
// forEach With Maps and Sets
// Map;
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'EUR', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, set) {
//   // _ underscore mean unnesesary
//   console.log(`${key}: ${value}`);
//   console.log(`${value}: ${value}`);
// });

// -------------------------------------------END-------------------------------------------------//

// NEW
// Coding Chalange TODO = DONE
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   juliaDataCopy = [...dogsJulia];
//   console.log(juliaDataCopy.splice(0, 1));

//   console.log(juliaDataCopy.splice(-2, 2));
//   console.log(juliaDataCopy);

//   const allData = juliaDataCopy.concat(dogsKate);
//   console.log(allData);

//   allData.forEach(function (value, i) {
//     console.log(
//       value > 3
//         ? `Dog number ${i + 1} is an adult, and is ${value} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`
//     );
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// -------------------------------------------END-------------------------------------------------//

// NEW
// The map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// // const movementsUSD = movements.map((mov) => {
// //   return mov * eurToUsd;
// // });

// // WITH ARROW Function :D
// const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movDescription = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposite' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movDescription);

// -------------------------------------------END-------------------------------------------------//

// NEW
// Computing Usernames

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Using map in function
// const createUserNames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map((name) => name[0])
//     .join('');
//   console.log(username);
// };

// createUserNames('Steven Thomas Williams'); //stw

// //  using map to iterate in accounts data and add soma data to each ov accounts

// const createUserInitials = function (accounts) {
//   accounts.forEach((acc) => {
//     acc.initial = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map((name) => name[0])
//       .join('');
//   });
// };

// createUserInitials(accounts);
// console.log(accounts);

// -------------------------------------------END-------------------------------------------------//

// NEW
// The filter Method
// const deposite = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposite);

// const depositefor = [];
// for (const mov of movements) if (mov > 0) deposite.push(mov);
// console.log(depositefor);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// -------------------------------------------END-------------------------------------------------//

// NEW
// The reduce Method

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }

// console.log(balance2);

// Maximum value
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// });
// console.log(max);

// -------------------------------------------END-------------------------------------------------//

// NEW
// Challenge #2 TODO = DONE
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// const Data1 = [5, 2, 4, 1, 15, 8, 3];
// const Data2 = [16, 6, 10, 5, 6, 1, 4];
// // GOOD LUCK 😀

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((age, i) => {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//     // return `${i + 1}=th human age is: ${age <= 2 ? age * 2 : 16 + age * 4}`;
//   });
//   const oldDogs = humanAge.filter((age) => age >= 18);
//   console.log(oldDogs);
// };
// calcAverageHumanAge(Data1);
// calcAverageHumanAge(Data2);

// // 3. Calculate the average human age of all adult dogs (you should already know
// // from other challenges how we calculate averages 😉)

// const average = function (data) {
//   const avg = data.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   console.log(avg);
// };

// average(Data1);
// average(Data2);

// -------------------------------------------END-------------------------------------------------//

// NEW
// The Magic of Chaining Methods
// const euroToUsd = 1.1;
// const totalDepositeUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * euroToUsd;
//   })
//   .reduce((acc, mov, i, arr) => acc + mov);

// console.log(totalDepositeUSD);

// -------------------------------------------END-------------------------------------------------//

// NEW
// Challange #3 TODO = DONE
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

// const calcAverageHumanAge = (ages) => {
//   const humanAge = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(humanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// -------------------------------------------END-------------------------------------------------//

// NEW
// The find Method
// const firtsWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firtsWithdrawal);

// const acount = accounts.find((acc) => acc.owner === 'Jessica Davis');
// console.log(acount);

// -------------------------------------------END-------------------------------------------------//

//NEW
// some and every
// console.log(movements);
// //  EQUALITT
// console.log(movements.includes(-130));

// // SOME: CONDITION
// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// // EVERY
// const everyDeposit = movements.every((mov) => mov > 0);
// console.log(everyDeposit);

// const xx = movements.filter((map) => map > 0);
// console.log(xx);

// console.log(xx.every((x) => x > 0));

// // Separate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// -------------------------------------------END-------------------------------------------------//

//NEW
//  flat and flatMap

// // flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // const accountMovements = accounts.map((acc) => acc.movements);
// // console.log(accountMovements);
// // const allMovements = accountMovements.flat();
// // console.log(allMovements);
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);

// const overalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// -------------------------------------------END-------------------------------------------------//

//NEW
// Sorting Arrays
// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// // Numbers
// console.log(movements);
// console.log(movements.sort()); // this not work

// // return < 0, A, B (keep order)
// // return > 0, A, B (switch order)
// // Ascending DONE
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b < a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);
// // Descending DONE
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b < a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// -------------------------------------------END-------------------------------------------------//

// NEW
// More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(26, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     (el) => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// -------------------------------------------END-------------------------------------------------//

// NEW
// Chalange TODO
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion..

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.DONE
// const createPortion = function (dogs) {
//   dogs.forEach(function (dog) {
//     dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
//   });
// };
// createPortion(dogs);
// console.log(dogs);

// // 2.DONE
// const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eathing ${
//     dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
//   }`
// );

// // 3 DONE
// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.recommendedFood < dog.curFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.recommendedFood > dog.curFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);

// // 4. // // 3 DONE..... Log a string to the console for each array created in 3., like this:
// // "Matilda and Alice and Bob's dogs eat too much!"
// // "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// // 5.DONE
// console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// // 6.DONE
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOk = (dog) =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(checkEatingOk));

// // 7.DONE
// console.log(dogs.filter(checkEatingOk));

// // 8.DONE
// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);

// console.log(sortedDogs);
