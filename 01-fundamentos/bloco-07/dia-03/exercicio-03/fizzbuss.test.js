const myFizzBuzz = require('./fizzbuzz');

test('testing fizzbuzz function', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(6)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(16)).toBe(false);
  expect(myFizzBuzz('10')).toBe(false);
});