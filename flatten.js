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

const flatten = function(arr) {
  const output = [];

  for(let element of arr) {
    if(!Array.isArray(element)) {
      output.push(element);
    } else if (Array.isArray(element)) {
        for(let el of element) {
          output.push(el);
        }
    }
  }
  return output;
};


//Test case
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
assertArraysEqual(flatten([]), []);