import { compose } from "./compose.js";

function a(acc) {
  console.log('a function excuting...');
  return acc + 1;
}

function b(acc) {
  console.log('b function excuting...');
  return acc + 2;
}

function c(acc) {
  console.log('c function excuting...');
  return acc + 3;
}

const calculator = compose(a, b, c);

const result1 = calculator(0);