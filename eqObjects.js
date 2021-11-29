const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
  if(objOneKeys.length !== objTwoKeys.length) {
    return false;
  }  else {
    for(let element of objOneKeys) {
        if(Array.isArray(object1[element]) && Array.isArray(object2[element]) ) {
          return eqArrays(object1[element],object2[element]);
        }
       if (object1[element] !== object2[element]){
        return false;
      }
    }
  }
  return true;
};


//Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abd = { a: "1", b: "2", d: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, abd), false);
assertEqual(eqObjects(cd,dc), true);
assertEqual(eqObjects(cd,cd2), false);

module.exports = eqObjects;
