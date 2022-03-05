## Notes

## Custom Hooks

The idea of a custom hook is logic re-usability. Imagine you have a state, that has logic built in that you cause in a component somewhere else. Well now you can take state and refactor it into its own file. You can then pass that state into multiple files as a new instance, and have all the logic written.

* Building your own Hooks lets you extract component logic into reusable functions.
* Custom hooks let us move repetitive or complex code out of our components
* Pulls "logic" out of your component not "visuals"
* You can think of Custom hooks as "helper functions" for React
* Custom hooks usually use other React hooks (useState, useEffect, etc)
* Normal helper functions cannot use Hooks. Only Custom Hooks can do that
* React Rule: React Hooks must start with the prefix "use"
* Multiple instances of the same custom hook do not share state
* A Custom Hook can return anything you want (value, array, object, function)

### Does this code works the same way?
Yes! it works exactly the same. We did not make any changes to the logic. Custom hooks are a convention.

### Do I have to name my Hook starting with use word?
Yes! it is also a convention that we follow. Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.

### Do Two Components using the same hook logic share state?
No this is not a global state mechanism. Everytime you declare a the hook its a new instance!!!!

### Some more Rules
Only call Hooks from the top-level of a function component or a custom Hook.

Cannot be called in React class components, loops, if statement, regular function, in event handlers

A custom Hook can call other custom or built-in Hooks.

## Links
- [Official Documentation](https://reactjs.org/docs/hooks-custom.html)
- [O'Reilly's Learning React](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
    - [Chapter 6: Creating Custom Hooks](https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/ch06.html#creating-custom-hooks)
- [Use Hooks](https://usehooks.com/)
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)


Credits: Notes above adapted from LHL previous lectures