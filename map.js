const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arrOne, arrTwo) {

  //Check if arrays are the same length
  if(arrOne.length !== arrTwo.length) {
    return false;
  }

  //Check if the elements at each index are the same
  for(let i = 0; i < arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]){
        return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: Array One: ${arrOne}  ===  Array Two: ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array One: ${arrOne} !==  Array Two: ${arrTwo}`);
  }
}



const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Test cases
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);

const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2,['GROUND','CONTROL','TO','MAJOR','TOM']);

module.exports = map;