
# Agenda

> "I promise I've a JavaScript joke. I'll tell you if you callback."


[x] Quick review of Asynchronous (Async) Code

[x] Quick recap of Callbacks
    [x] - Error handlling inside callbacks

[x] Demo Time: Callback waterfall (aka Callback Hell)

[x] What are promises, what problems they solve?

[x] Can we create our own promises? (Hint: Yes!)

[x] How to run async code in Parallel? (Promise.all and Promise.race)

[x] Blue Pill -> Async & Await (here is your matrix movie reference)


# Promises - Quick Introduction

A promise is an object that may produce a single value some time in the future. Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. 

A Promise can be in one of these states:

a. pending: initial state, neither fulfilled nor rejected.

b. fulfilled: meaning that the operation was completed successfully.

c. rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value or rejected with a reason (error).

### In todays's class we:

* Discussed what async code is and how to handle it using callbacks (see async-code-demo.js)
* We built a small pizza ordering system (SPOS) using callbacks (see pizza-order-callbacks.js)
* Refactored the SPOS to use promises instead of callbacks (see pizza-order-promises.js) 
* We built a small Information Retrieval System whereby we read json files containing SpaceX rockets info and present their descriptions to the user.
* We made our own fake promise generator (please don't do that in real life), and demoed how we could handle multiple promises as all and how we can make promises run again.



My favorite resources: 

Promises MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

SpaceX API - https://docs.spacexdata.com/

History of Promises in JavaScript: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261