const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
    return true;
  } else if (actual !== expected) {
    //console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
    return false;
  }
};


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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("🍏🍏🍏🍏 Passed: These arrays are equal");
  } else console.log("🍎🍎🍎🍎 Failed: These arrays are not equal");
};


const letterpositions = function(string) {
  let result = {};
  let spaceregex = /\s/;
  for (let i = 0; i < string.length; i++) {
    if (!spaceregex.test(string[i])) {
      if (result[i] !== " ") {
        if (result[string[i]]) {
          result[string[i]].push(i);
        } else {
          result[string[i]] = [i];
        }
      }
    }
  } return result;
};




