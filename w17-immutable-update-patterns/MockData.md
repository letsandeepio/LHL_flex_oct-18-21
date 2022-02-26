# Mock Data

```jsx
const rocket1 = {
  id: "1",
  name: "Dragon X",
  refuelInterval: 30,
  lastRefuelDate: new Date("2020-01-01"),
};
const rocket2 = {
  id: "2",
  name: "Docker 4",
  refuelInterval: 2,
  lastRefuelDate: new Date("2022-01-19"),
};
const rocket3 = {
  id: "3",
  name: "Spaceship Wonder1",
  refuelInterval: 7,
  lastRefuelDate: new Date("2022-01-01"),
};
const rocket4 = {
  id: "4",
  name: "Death Star",
  refuelInterval: 9999,
  lastRefuelDate: new Date("2024-01-01"),
};

const listOfRocketsArray = [rocket1, rocket2, rocket3, rocket3];

const listOfRockets = {
  1: rocket1,
  2: rocket2,
  3: rocket3,
  4: rocket4,
};
```