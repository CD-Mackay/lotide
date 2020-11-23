const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const head = function(array) {
  if (array) {
    return array[0]
  } else return undefined;
}

assertEqual(head([1]), 1);