# Unit Testing with Jest

This repository demonstrates how to perform unit testing using **Jest**, a popular JavaScript testing framework. Unit testing is essential for ensuring the correctness of individual components and functions in your codebase. Jest provides an easy-to-use and powerful platform for writing and executing unit tests.

## Getting Started

### Prerequisites

- **Node.js and npm:** Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone this repository to your local machine:**
   ```bash
   git clone https://github.com/Mhmdyasser33/unit-test-with-jest

## Install the project dependencies: 
npm install 

## Writing Unit Tests
All unit tests are located in the __tests__ directory. You can organize your tests by creating files named like filename.test.js or filename.spec.js inside this directory.

Here's an example of a simple unit test for a utils.js module:
// __tests__/utils.test.js

const utils = require('../utils');

test('Adding 1 + 2 should equal 3', () => {
  expect(utils.add(1, 2)).toBe(3);
});

test('Checking if a value is greater than 10', () => {
  expect(utils.isGreaterThan10(15)).toBe(true);
  expect(utils.isGreaterThan10(8)).toBe(false);
});

   
