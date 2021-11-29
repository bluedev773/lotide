const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: Array One: ${arrOne}  ===  Array Two: ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array One: ${arrOne} !==  Array Two: ${arrTwo}`);
  }
}

module.exports = assertArraysEqual;