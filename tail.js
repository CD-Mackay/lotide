const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(array) {
  let result = array.slice(1);
  return result;
};
const test = [2, 3, 4];
const test2 = tail([1, 2, 3, 4]);
assertEqual(test[0], test2[0]);