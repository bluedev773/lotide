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

const takeUntil = function(array, callback) {
  const results = [];
  for(let item of array){
    if(!callback(item)){
      results.push(item)
    } else {
      return results;
    }
  }
}


//Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;