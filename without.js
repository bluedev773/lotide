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

const without = function (source, itemsToRemove) {
 output = source.filter(item => !itemsToRemove.includes(item));
 console.log(output);
}

//Test Cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);