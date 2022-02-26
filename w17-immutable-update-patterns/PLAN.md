# Refueling Rockets

Rocket list with name, refueling interval, last refuel date, button to refuel each rocket to reset the date.

# User stories

- User can see a list of rockets
- Each rocket can be with a red or green border depending on fueling status
- User can fuel a rocket by clicking on button
- User can refuel all the rockets by clicking a special button

# Data Structures

```jsx

 interface Rocket {
    id: String;
    name: String;
    refuelInterval: Number;
    lastRefuelDate: Date;
 }

interface Rockets [
  Rocket
]

```

# Mock Data


```jsx
const rocket1  = {
  id: 1,
  name: "Dragon X",
  refuelInterval: 3,
  lastRefuelDate: new Date("2022-01-01)
}

const rocket2  = {
  id: 2,
  name: "Dragon Y",
  refuelInterval: 10,
  lastRefuelDate: new Date("2022-01-01)
}

const rocket3  = {
  id: 3,
  name: "Dragon Z",
  refuelInterval: 2,
  lastRefuelDate: new Date("2022-01-01)
}

const rocket4  = {
  id: 4,
  name: "Dragon M",
  refuelInterval: 9999,
  lastRefuelDate: new Date("2024-01-01)
}

const listOfRocketsArray = [rocket1, rocket2, rocket3, rocket4];

const listOfRocket = {
  1: rocket1,
  2: rocket2,
  3: rocket3,
  4: rocket4
}
```

# HTML Structure

- body
  - header 
      - h1 "Rocket Station"
  - section
      - article
          - h1 name of the rocket
          - p date it was last fueled on
          - button to refuel
  - section
    - button to refuel all rockets


# Component Structure

- App
  - Header
  - RocketList
    - RocketListItem
  - RefuelAllButton
