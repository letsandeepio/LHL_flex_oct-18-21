/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *         
 *    minimumValue     | ---> 
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */

// HOT TIP -> think about the output first? what it is? where do you going to store it?
// What you need to do with it? print it? return it? how do you return it? 

// SUPER IMPORANT -> How to access elements inside array? You have 2 options -> 
// 1. Bracket Notation
// 2. Dot Notation
// Explore your own which one is to be used at what point?

// Attempt 1
// const min = function(arr) {
//   let minimumValue = arr[0];
//   for(const value of arr){
//     if(minimumValue > value){
//         minimumValue = value;
//     }
//   }
//   return minimumValue;
// };

// Attempt 2

// const min = function(arr) {
//   let sortedArray = arr.sort((a,b)=>a-b); // try never to modify your original input
//   return sortedArray[0];
// };

// Attempt 3
// What is spread operator?

const min = (arr) => Math.min(...arr)

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */

// Use all approaches above
const max = (arr) => Math.max(...arr);

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };
