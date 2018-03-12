Here is a set of exercise to more thorougly test your knowledge of more advanced javascript concepts, such as Promises, closures, and the functional nature of the language (you will see functions passed as parameters and will be required to write code that will include a function that returns a function)

Note that I created the project using create-react-app. 

Prerequisites
* node (any version 6+)
* npm (any version 5+)
* git (if you wish to clone locally)

In order to complete the exercises, I would suggest the following order:
* clone the repository to your local computer (you can also download the code if you wish)
* from the folder you created, run `npm install`
* to verify everything is working, run `npm run test`. There should be 3 tests failed and 3 tests skipped
* open `intercept-1.js` and `intercept-1.test.js`
* Implement the `intercept` function in `intercept-1.js`
* when all tests are passing, move on to `intercept-2.js` and `intercept-2.test.js`. Change `xit` to `it`
* run `npm run test` and verify that 3 tests are passing, 1 is failing, and 2 are skipped.
* repeat until done all three exercises