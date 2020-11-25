// assertEqual helper function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
    return true;
  } else if (actual !== expected) {
    //console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
    return false;
  }
};

// eqArrays helper function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!assertEqual(array1[i], array2[i])) {
      return false;
    }
  } return true;
};

// eqObjects function
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const element in object1) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(object1, object2)) {
    console.log(`🟩🟩🟩🟩 Passed! ${inspect(object1)} === ${inspect(object2)}🟩🟩🟩🟩`);
  } else console.log(`🟥🟥🟥🟥 Failed! ${inspect(object1)} !== ${inspect(object2)}🟥🟥🟥🟥`);
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: "2", c: 3});
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});