import { fizzBuzz, FizzBuzzModifiers } from './index.ts';


test('fizzbuzz for 3', () => {
  expect(fizzBuzz(3, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz');
});

test('fizzbuzz for 5', () => {
  expect(fizzBuzz(5, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz 4 Buzz');
});

test('fizzbuzz for 10', () => {
  expect(fizzBuzz(10, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz');
});

test('fizzbuzz for 21', () => {
  expect(fizzBuzz(21, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz Bang FizzBuzz 16  Fizz 19 Buzz FizzBang');
});

test('fizzbuzz for 25', () => {
  expect(fizzBuzz(25, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz Bang FizzBuzz 16  Fizz 19 Buzz FizzBang Bong 23 Fizz Buzz');
});

test('fizzbuzz for 30', () => {
  expect(fizzBuzz(30, new FizzBuzzModifiers(true, true, true, true, true, true)).join(" ")).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz Bang FizzBuzz 16  Fizz 19 Buzz FizzBang Bong 23 Fizz Buzz Fezz Fizz Bang 29 FizzBuzz');
});
