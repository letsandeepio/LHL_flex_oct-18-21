/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */

// Attempt #1 -> C Style Loop

// const count = function(arr) {
//   let counter = 0; 
//   for(let i=0; i < arr.length; i++){
//     counter += 1; 
//   }
//   return counter;
// }

// Attempt #2

const count = function(arr) {
 return arr.length;
}


/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns: ---> output
 *
 *    36
 */

// Attempt #1
// const sum = function(arr) {
//   let totalSum = 0;
//   for(let number of arr) {
//       totalSum += number;
//   }
//   return totalSum;
// };

// ? => Ternary Operator

// Attempt #2 --> Code Golfing
const sum = function (arr) {
    return arr.length === 0 ? 0 : arr.reduce((currValue, prevValue)=>currValue+prevValue)
};


// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */


// Approach 
// -> 1. Sum of all the number in the array
// -> 2. Count all the numbers in the array
// -> 3. Divide Sum by Count
// -> 4. Return the rounded result using the round helper

// attempt 1 -> Elegant approach ❤️

// const mean = function(arr) {
//   if (arr.length === 0) return null;
//   const totalSum = sum(arr);
//   const totalCount= count(arr);
//   const calculatedMean = round(totalSum / totalCount);
//   return calculatedMean; 
// };

// attempt 2 - code golfing

const mean = function(arr) {
  return (arr.length === 0) ? null: round(sum(arr)/count(arr))
};


// Don't change below:
module.exports = { count, sum, mean };
