// ---------------Helper Functions----------------
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
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("🍏🍏🍏🍏 Passed: These arrays are equal");
  } else console.log("🍎🍎🍎🍎 Failed: These arrays are not equal")
} 
//-------------End Helper Functions --------------------


const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
}

const data1 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
const results1 = takeUntil(data1, x => x === 6);

assertArraysEqual(results1, [1, 2, 3, 4, 5]);

const data2 = ["floating", "in", "a", "most", "peculiar", "way"];
const results2 = takeUntil(data2, x => x.length === 1);
assertArraysEqual(results2, ["floating", "in"]);

const data3 = ["keep", "keep", "remove"];
const results3 = takeUntil(data3, x => x !== "keep");
assertArraysEqual(results3, ["keep", "keep"]);