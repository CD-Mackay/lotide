
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
    return true;
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
    return false;
  }
};

  const countOnly = function(array, object) {
    let result = {};
    for (const item of array) {
      if (object[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
    } return result;
  }


