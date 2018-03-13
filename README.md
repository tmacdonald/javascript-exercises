Here is a set of exercise to thorougly test your knowledge of more advanced javascript concepts, such as Promises, closures, and the functional nature of the language (you will see functions passed as parameters and will be required to write code that will include a function that returns a function)

Note that I created this project using create-react-app. 

## Prerequisites

* node (any version 6+)
* npm (any version 5+)
* git (if you wish to clone locally)

All tests will be provided with a function A. A takes some arguments and returns a promise.

```
function sumPromise(a, b) { 
  return new Promise(resolve => resolve(a + b)); 
}
```

Let's say for instance that sumPromise took two numbers and summed them. Imagine that we actually wanted to pass two strings and return the sum of their lengths. We could simply pass the lengths of the strings as parameters to A, but suppose we wanted something reusable.

We also have an interceptor function. The interceptor function takes as arguments the same arguments as A along with an addition function that has the same API as A (same arguments and returns a promise). It will also return a promise.

Imagine that we had a client that wanted to call sumPromise with strings, and have the response a Promise that would resolve to a string.

Our interceptor might look like this:

```
function interceptor(a, b, next) {
  return next(parseInt(a, 10), parseInt(b, 10)).then(sum => sum + "")
}
```

The exercises will start off without arguments and build from there.

## Getting Started

* clone the repository to your local computer (you can also download the code if you wish)
* from the folder you created, run `npm install`

All exercises build on top of one another.

### Exercise 1

The first exercise has a function to be intercepted that takes no arguments. All it has to do
is modify the response.

After getting the code, the tests for exercise 1 will be failing. The goal is to get the tests to pass.

### Exercise 2

The second exercise has a function to be intercepted that takes a single argument. The interceptor can modify the arugments and/or the result.

The second exercise's tests are disabled. To enable them, open up `exercise-2.test.js` and replace `xit` with `it`. Now the tests should fail.

### Exercise 3

The third exercise has the same function to be intercepted as the second exercise. The difference here is that multiple interceptors can modify the arguments and/or the result.

Note that the order of the interceptors matters. The first interceptor will modify the arguments before the second interceptor, but will modify the response after the second interceptor.

The third exercise's tests are disabled. To enable them, open up `exercise-3.test.js` and replace `xit` with `it`. Now the tests should fail.

### Exercise 4

The fourth exercise is, admittedly, a jump in complexity. In this exercise, The function to be intercepted has more than one argument. The `intercept` method must provide a way to modify 0 or more arguments.

As a hint, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters which explains how to handle a variable number of arguments.

The fourth exercise's tests are disabled. To enable them, open up `exercise-4.test.js` and replace `xit` with `it`. Now the tests should fail.