const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(string) {
  let result = {};
  string = string.replace(/\s+/g, '');
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result;
}


