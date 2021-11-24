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

const middle = function(arr) {
  const output = [];
  if(arr.length < 3) {
    
  } else if(arr.length % 2 !== 0) {
    output.push(arr[Math.floor(arr.length / 2)]);
  } else {
    output.push(arr[arr.length / 2 - 1]);
    output.push(arr[arr.length / 2]); 
  }
  return output;
}

//Test cases
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);