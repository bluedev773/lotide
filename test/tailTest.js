const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse','Labs']);
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Head']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  })
})

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// //Test Case 2: An array with only one element should yield an empty array for its tail
// const resultTwo = tail(["Hello"]);
// assertEqual(resultTwo.length, 0); //ensure we do not have any elements in the array
// assertEqual(resultTwo[0], undefined); //ensure that the first element is undefined

// //Test Case 3: An empty array should yield an empty array for its tail
// const resultThree = tail([]);
// assertEqual(resultThree.length, 0); //ensure we do not have any elements in the array
// assertEqual(resultThree[0], undefined); //ensure that the first element is undefined

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!