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

var data1 = [17, 21, 23];
var data2 = [12, 5, -5, 0, 4];
const printForecast = (arr1, arr2) => {
  let str = '';
  let data3 = arr1.concat(arr2);
  //   console.log(data3);
  for (let i = 0; i < data3.length; i++) {
    str += `${data3[i]}\xB0C in {i+1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1, data2);

// TODO
