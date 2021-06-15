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
// // console.log(arr.splice(2));
// // console.log(arr);
// // console.log(arr.splice(-1));
// // arr.splice(0);
// // console.log(arr);
// // Reverse
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
