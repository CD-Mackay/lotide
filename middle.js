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


const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 !== 0) {
    result.push(array[(array.length - 1) / 2]);
  } else result = (array.slice((array.length - 1) / 2, (((array.length + 1) / 2) + 1)));
  console.log(result);
  return result;
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, "6"]), [2, 3]);
assertArraysEqual(middle(["hello", "world"]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);