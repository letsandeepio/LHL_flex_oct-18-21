// Factory Functions
const Pizza = (nameArg, crustArg) => {
  const name = nameArg;
  const crust = crustArg;

  return {
    name,
    crust,
    bake: () => {
      console.log(`baking the pizza ${name}`);
    },
    delivery: () => {}
  };
};

PepperoniPizza = Pizza('Pepperoni', 'thin');
console.log(PepperoniPizza.name);
PepperoniPizza.bake();
VeggiDelight = Pizza('VeggiDelight', 'thick');
VeggiDelight.bake();
