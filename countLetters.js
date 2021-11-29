const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  const sentenceNoSpace = sentence.replace(/\s+/g, '');
  for(let char of sentenceNoSpace) {
    if(results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
}

//Test cases
const result = countLetters('Lighthouse Labs');
console.log(result);
assertEqual(result['L'], 2);
assertEqual(result['s'], 2);
assertEqual(result['t'], 1);

module.exports = countLetters;