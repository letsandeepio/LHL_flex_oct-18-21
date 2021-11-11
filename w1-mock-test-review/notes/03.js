/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */


/*
  How to approach? 
  1. Find the number that occurs more frequently? How to do it?
    -> Keep track of all numbers? How? What data structure? Can I use Array? No
    -> and how many times occured -> We need object because we need to track how many times?
    -> Key Value Pairs in Objects
        -> Keys will be our numbers !!
        -> Values will be our occurences
    1.a -  I need to loop through number

  2. Find out the most frquently occuring number and return it
  3. Think about the output first? 
  4. Our overall approach will be same but different programming techniques can be used

*/

const mode = function(arr) {
  let modeValue;
  let frequency = {};
  for(const number of arr){
    const numberFrequency = frequency[number];
    // If number has not been seen numberFrequency is going to undefined
    // If this is the firt time and it is undefined lets just set it to 1;
    if(numberFrequency) {
      frequency[number] = numberFrequency +1;
    } else {
      frequency[number] = 1
    }
  }

  let maxValue = 0;
  let maxNumber = 0; 
  for(const number in frequency){
    let value = frequency[number]
    if (value  > maxValue) {
      maxValue = value;
      maxNumber = number;
    }
  }

modeValue = parseInt(maxNumber);

return modeValue; 

};

// Don't change below:

module.exports = { mode };
