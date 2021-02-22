/* Shinde_hw5
 Example 2 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw5 Example 2");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd_array = array.filter(num => num % 2 != 0);
let div_by_2or5 = array.filter(num =>(num % 2 == 0) || (num % 5 == 0));
let div_by_3_squared = array.filter(num => num % 3 == 0).map(num => num * num);
let sum_sqrs_num_div_by_5 = array.filter(num => num % 5 == 0).map(num => num * num).reduce((a,b)=> a + b);

console.log(`Real Array is ${array}`);

console.log(`The odd numbers are ${odd_array}`);

console.log(`Numbers dividible by 2 or 5 are ${div_by_2or5}`);

console.log(`The square of numbers divisible by 3 are ${div_by_3_squared}`);

console.log(`Sum of squares of numbers divisible by 5 is ${sum_sqrs_num_div_by_5}`);