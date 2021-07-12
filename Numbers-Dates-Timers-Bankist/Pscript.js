// LECTURES
// NEW
// Converting and Checking Numbers
// console.log(23 === 23.0);

// //Base 10 - 0 to 9 1/10 = 0.1 3/10 = 3.333333
// //binary base 2 - 0 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// //Conversion
// console.log(Number(23));
// console.log(+'23'); //this is the same like above :D

// //Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30', 10));

// console.log(Number.parseInt('   2.5rem'));
// console.log(Number.parseFloat('   2.5rem'));

// console.log(parseFloat('   2.5rem'));

// //Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));

// //Checkomg is value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));
// --------------------------------------------------END--------------------------------------------------

// NEW
// Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// //Rounding integers
// console.log(Math.trunc(23.9));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.9));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.9));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.745).toFixed(3));
// console.log(+(2.74).toFixed(2));

//-------------------------------------------END--------------------------------------------

//NEW
// The Remainder Operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2*2 +1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2*3 +2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// ---------------------------------------------END----------------------------------------------------------

//NEW
// Working with BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(851561681616816818116151681685464n);
// console.log(BigInt(55451556156486166151));

// //Operations
// console.log(10000n + 10000n);
// console.log(16516535134681351351864186161616n * 1135181n);
// const huge = 2055165561561651n;
// const num = 23;
// console.log(huge * BigInt(num));

// //Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == 20);

// console.log(huge + ' is REALLY big!!!');
// //Divisions
// console.log(10n / 3n);
// console.log(10 / 3);

//-----------------------------------------------------END--------------------------------------------------

// NEW
//Creating Dates
// const now = new Date();
// console.log(now);

// console.log(new Date('Mon Jul 12 2021 20:08:57 '));
// console.log(new Date('December 24,2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// //Working with dates
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142253385000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

//-----------------------------------------------------END--------------------------------------------------

// NEW

function smooth(elements, integerList) {
  var i;
  var previous;
  var result = true;

  previous = parseInt(integerList[0]);
  for (i = 0; i < elements; i++) {
    num = parseInt(integerList[i]);
    if (Math.abs(num - previous) > 1) {
      result = false;
      break;
    }
    previous = num;
  }

  return result;
}

function wrapper() {
  var n;
  var myArray;
  n = document.myform.elements.value;
  elements = parseInt(n);
  console.log(elements);
  integers = document.myform.integers.value;
  console.log(integers);
  myArray = integers.split(' ');
  if (smooth(elements, myArray)) {
    alert('YES');
  } else {
    alert('NO');
  }
}
