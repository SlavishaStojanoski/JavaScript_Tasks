/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
// Reverse;
// arr = ['a', 'b', 'c', 'd', 'e'];
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
