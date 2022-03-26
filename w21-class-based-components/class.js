console.log('Hello World Classes!');

class Rocket {
  constructor(name, engine){
    this.name = name;
    this.engine = engine;
    this.company = "Space X";
  }
  launch(){
    console.log(this.name + " has launched!")
  }
}

class Spaceship extends Rocket {
  constructor(name, engine, crew) {
      super(name, engine);
      this.crew = crew;
  }
  land() {
    console.log(this.name + " has landed!")
  }
}

const rocketX = new Rocket("Rocket X", 10);
const spaceshipX = new Spaceship("Spaceship X", 5, 2);

console.log(spaceshipX.name);
console.log(spaceshipX.crew);
spaceshipX.launch();
spaceshipX.land()