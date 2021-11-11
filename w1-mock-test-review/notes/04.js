/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

/* NOTES
* 
* Approach 1
* Look at the formula and study carfefully and divide the problem into sub problems to be solved
* for e.g. pouplationMean (what is it and how to calculate it)
* This strategy is Divide and Conquer. Divide the problem into smaller chunks
* 
* Approach 2 
* List down the steps to calculate the standard deviation
* Step 1: Find the mean.
* Step 2: For each data point, find the square of its (distance to the mean).
* Step 3: Sum the values from Step 2.
* Step 4: Divide by the number of data points (count)
* Step 5: Take the square root. Math.sqrt(number)
*
* https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/variance-standard-deviation-population/a/calculating-standard-deviation-step-by-step
*
*/

// Two Approaches? 
// User higer order functions
// or use Traditional loops

const {mean, sum} = require('./00.js')


// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  // Step 1 
  const meanValue = mean(arr);
  // Step 2 
  const distanceToTheMean = arr.map((item)=> {
    const distance = item - meanValue
    return Math.pow(distance, 2)
  })
  // Step 3
  const summation = sum(distanceToTheMean);
  // Step 4
  const stdDevValue = summation / arr.length;
  // Step 5 
  const roundedValue = round(Math.sqrt(stdDevValue));
  return roundedValue;
};

// Don't change below:
module.exports = { stdev };
