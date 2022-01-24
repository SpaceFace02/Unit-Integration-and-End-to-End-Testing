# Unit-Integration-and-End-to-End-Testing

Exploring the different types of testing, including synchronous and asynchronous unit tests, integration tests and end-to-end tests using Jest and Puppeteer.

- The validate.test.js file inside tests folder contains an end-to-end test for one of my semester lab projects. It fully automates the process of inputting and testing the whole website using Puppeteer.
- The fetch.test.js is an end-to-end test for asynchronous code, fetching data from API and running various tests.
- The other tests and unit tests and small, except for one integration test in the validate.test.js file itself.

### To run

- Clone repo
- cd into the directory
- Run `npm i`
- Run `npm test`
- Also in validate.test.js file and fetch.test.js file, you can set `headless:true` to run and see the test automate in realtime in the chromium browser.

### Technologies used

- Puppeteer - For the end-to-end test
- Jest - For the unit and integration tests
- Browserify - To bundle the javascript files
- Babel - To transpile the javascript files
- Axios - To make http requests

#### I get a small warning in fetch.test.js, which in turn arises from util.js, a small memory leak it seems, which doesn't allow the test to exit gracefully, and is compelled to forcefully exit. If anyone can figure out how to fix this, please let me know. Thanks!
