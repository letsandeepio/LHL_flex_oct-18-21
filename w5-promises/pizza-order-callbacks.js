const readline = require('readline');

console.log('Welcome to Labbers Pizza Maker');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  rl.question('Which crust you would like?', (crust) => {
    rl.question('Which size you would like?', (size) => {
      rl.question('Which sauce you would like?', (sauce) => {
        rl.question('Which toppings you would like?', (toppings) => {
          console.log(
            `Order recieved: \n Hi! ${name}, you have placed an order for a ${crust} crust pizza (${size} size) with ${sauce} sauce and toppings: ${toppings} `
          );
          rl.close();
        });
      });
    });
  });
});
