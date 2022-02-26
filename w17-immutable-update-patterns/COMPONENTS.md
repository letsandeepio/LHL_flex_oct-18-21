# Component Example

```jsx
const HelloPlanet = (props) => {
  const { planetName } = props;

  return (
    <p style={{color: "red"}}>
    <h1>Hello, {  planetName }</h1>
    </p>
  )
}
```

```jsx
<HelloPlanet planetName="Mars">
```


# Behind the scenes of JSX

```jsx
React.createElement("h1","Hello world")
React.createElement("HelloPlanet",{planetName: "Mars"})
```

# Props 

```jsx
const getUserProfile = (a, b, c, d, e, f, g, h, i, j, k) => {
  //....
}

getUserProfile(a, null, null, .... , k);


const getUserProfile = ({a, b, c, d, e, f, g, h, i, j, k}) => {
  //....
}

getUserProfile({a:1, b:1, k:1});
```