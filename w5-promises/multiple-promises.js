
// TODO: make this function error out randomly!

const generateFakePromise = (afterDelay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), afterDelay);
  });
};

// Order

const pizzas = [
  { name: 'Veggie Delight', afterDelay: 5000 },
  { name: 'Tropical Thunder', afterDelay: 2000 },
  { name: 'Hawian', afterDelay: 3000 }
];

// pizzas.forEach((pizza) =>
//   generateFakePromise(pizza.afterDelay, pizza.name).then((value) =>
//     console.log(value)
//   )
// );

const pizzaPromise = pizzas.map((pizza) =>
  generateFakePromise(pizza.afterDelay, pizza.name)
);

const juicePromise = generateFakePromise(5000, "Orange")

Promise.all([...pizzaPromise,juicePromise]).then((values)=>console.log(values))

//Promise.race(pizzaPromise).then((values) => console.log(values));

// generateFakePromise(5000, 'Pepporoni').then((value) => {
//   console.log(`${value} pizza is ready!`);
// });
