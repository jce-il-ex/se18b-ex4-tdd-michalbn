var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  // your code to make the test pass goes here ...
  return a+b;
}

function multiply (a, b) {
  // your code to make the test pass goes here ...
  return a*b;
}

function sub (a, b) {
  // your code to make the test pass goes here ...
  return a-b;
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('sum should return the addition of two numbers', function (t) {
  t.equal(30, multiply(5, 6)); // make this test pass by completing the add function!
  t.end();
});

test('sum should return the addition of two numbers', function (t) {
  t.equal(29, sub(30, 1)); // make this test pass by completing the add function!
  t.end();
});
