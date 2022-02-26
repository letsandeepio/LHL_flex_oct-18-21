/* Never modify your state directly
* Always make copy of your state
* Then modify it
* then update it */


// let someNumber = 4
// let anotherNumber = someNumber;
// console.log(someNumber + anotherNumber);

// someNumber = 10
// console.log(someNumber + anotherNumber);

// let xArray = [1, 2];
// let someArray = xArray

// xArray[0] = 4;

// console.log(xArray)
// console.log(someArray)

// console.log(xArray[0] + xArray[1] + someArray[0] + someArray[1]);


let xArray = [{data: {num: 1}}];
let someArray = [...xArray];

console.log(someArray);

xArray[0].data.num = 4;

console.log(xArray);
console.log(someArray);

const listOfRockets = {
  1: rocket1,
  2: rocket2,
  3: rocket3,
  4: rocket4
};

const updateRocket = {...listOfRockets[1]}
const booster = {...updateRocket.booster1}
updateRocket.refuelDate = new Date();
const newListOfRockets = { ...listOfRockets, updateRocket };