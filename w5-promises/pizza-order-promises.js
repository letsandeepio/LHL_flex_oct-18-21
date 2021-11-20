// I promise a student that I am going to have 1:1 with him Next Sunday

// Promise
//      -> Promise Unfullfilled (Pending) - ✅
//      -> Promise Fullfilled (Resolved)
//                -> It resolves with the value of the promise
//        -> .then keyword
//      -> Promise Broken (Rejected) - ✅
// .                1. Error has happened
//                  2. Timeout

// const readline = require('readline/promises'); - NODE V15 and above

// Chaining promises

const readlinePromise = require('./readline-promise');

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pizzaOrder = {};

rlp
  .question('What is your name?')
  .then((name) => {
    pizzaOrder.name = name;
    return rlp.question('Which crust you would like?');
  })
  .then((crust) => {
    pizzaOrder.crust = crust;
    return rlp.question('Which size you would like?');
  })
  .then((size) => {
    pizzaOrder.size = size;
  })
  .catch(() => {
    console.log('Sorry we are busy! Call back later');
  })
  .finally(() => {
    const { name, crust, size } = pizzaOrder;
    console.log(
      `Order recieved: \n Hi! ${name}, you have placed an order for a ${crust} crust pizza (${size} size).`
    );
    rlp.close();
  });
