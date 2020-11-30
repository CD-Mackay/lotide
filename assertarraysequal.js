const eqArrays = require("./eqArrays");
 
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("🍏🍏🍏🍏 Passed: These arrays are equal");
  } else console.log("🍎🍎🍎🍎 Failed: These arrays are not equal")
};

module.exports = assertArraysEqual;




