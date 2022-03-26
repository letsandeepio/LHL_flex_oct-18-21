# W08D04 - Class-based Components

### To Do

[x] Review ES6 Classes
      * https://github.com/letsandeepio/LHL_flex_oct-18-21/tree/main/flex-oct-18-breakout-classes
[X] Intro to Class-based Components
[X] Functional Components Vs Classbased Components
[X] Deep dive Class based components
      [X] Backround
      [x] How to pass props?
      [x] How to handle State and changes?
      [x] How to handle events?
      [x] Bind Keyword
[x] Lifecycle Methods
      * relation to hooks
      * render ()
      * componentDidMount
      * componentDidUpdate
      * componentWillUnmount
[x] Lecture Review & QnA

### Review ES6 Classes

- Classes are [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for functions that return objects
- You can make reference to the objects own properties and methods using the `this` keyword
- When a new object is created, any arguments used will be passed as parameters to the constructor method

```js
// class declaration
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
```

### Class Components

- An alternative to creating functional components using ES6 classes
- Used for making stateful components prior to the release of hooks

```js
// a simple class component
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

- State is established in the constructor

```js
class StateExample extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world',
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
```

### Passing Props

- Components can access props passed to them using `this.props`
- Props are passed from parent-to-child via attributes

```js
// in parent component
<HelloWorld message="hello there">
  <p>Greetings and good day</p>
</HelloWorld>

// in child
<p>Message: {this.props.message}</p>
<div>{this.props.children}</div>
```

### Handling Events

- Event handlers need to be bound to the component instance using the `bind` method
- Binding the method makes sure that any references to `this` inside the function will point to the component instance

```js
class BindExample extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // do something using the `this` keyword
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}
```

### Changes to State

- Just like with functional components, we never want to mutate state directly

```js
// this is bad
this.state.count = this.state.count + 1;
```

- Instead, we use the `setState` method to update state
- The value passed to `setState` will be _merged_ into the component's state

```js
this.setState({ count: this.state.count + 1 });
```

### Lifecycle Methods

- During a components _lifecycle_, it will go through several different events such as mounting, rendering, unmounting, and updating (not necessarily in that order)
- Note: `render` and `constructor` are lifecycle methods
- The React API exposes various methods that allow us to write code that will run during these events

```js
// the component has mounted successfully
// set up timers or create socket connections in this method
componentDidMount() {}

// runs every time the component updates
// run logic that depends on state or props
componentDidUpdate() {}

// runs right before the component unmounts
// clear intervals and close connections; perform any cleanup necessary
componentWillUnmount() {}
```

Courtesy: LHL Past Lectures/Alvin