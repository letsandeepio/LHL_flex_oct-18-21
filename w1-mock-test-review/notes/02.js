/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function (arr) {

   let list = arr.sort((a, b) =>  b - a)
   let middle;
   if (arr.length % 2 === 0) {
     middle = arr.length / 2;
     return round((list[middle - 1] + list[middle]) / 2);
   } else {
     middle = Math.floor(arr.length / 2);
     return list[middle];
   }
};


// Don't change below:

module.exports = { median };
