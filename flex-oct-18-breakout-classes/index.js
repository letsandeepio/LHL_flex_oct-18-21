
class Pizza {
  #price
  constructor(name, crust) {
    this.name = name;
    this.crust = crust;
    this.hst = 3;
    this.price = 10;
  }
  get pizzaPriceInCAD() {
     return `CAD ${this.price}`;
  }
  get pizzaPriceInUSD() {
    return `USD ${this.price * 1.33}`;
  }
  set pizzaPrice(newPrice){
    if(newPrice > 10) {
      this.price = newPrice;
    }
  }
  bake() {
    console.log(`baking pizza ${this.name}`);
  }
}

class GourmetPizza extends Pizza {
  constructor(name, crust, organic, vegan){
    super(name, crust);
    this.organic = organic;
    this.vegan = vegan;
  }
  get isOrganic() {
    return this.vegan;
  }
  set hstPrice(newHst) {
    this.hst = newHst;
  }
  pickup(){
    console.log(`picking ${this.name} pizza`);
  }
}

VeggieDelight = new Pizza('Veggie','Thin');

VeggieDelight.bake();

VeggieDelightOrganic = new GourmetPizza('Veggie Organic', 'Thin');
VeggieDelightOrganicVegan = new GourmetPizza('Veggie Organic Vegan', 'Thin', true, true);

VeggieDelightOrganic.bake();
VeggieDelightOrganic.pickup();

console.log(VeggieDelightOrganicVegan.isOrganic)
console.log(VeggieDelightOrganicVegan.vegan);

console.log(VeggieDelightOrganicVegan.name);
console.log(VeggieDelightOrganicVegan.hst);


