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
    console.log(`✅✅✅ Assertion Passed: Array One  ===  Array Two`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array One !==  Array Two`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
}

//Test cases
const result = letterPositions('hello');
console.log(result);
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2,3]);
assertArraysEqual(result['o'], [4]);

module.exports = letterPositions;