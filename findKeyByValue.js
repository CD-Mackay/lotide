const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const findKeyByValue = function (object, value) {
  for (const element in object) {
    if (object[element] === value) {
      return element;
    }
  } return undefined;
}


