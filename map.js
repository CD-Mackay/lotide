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


const words = ["ground", "control", "to", "major", "tom"];
// ------------Map Function ---------------------
const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
   } return results;
}
// ------------End Map---------------------------------

const results1 = map(words, word => word[0]);
const shortWords = map(words, word => word.slice(0, 2));
const capitalWords = map(words, word => word.toUpperCase());
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(shortWords, ['gr', 'co', 'to', 'ma', 'to']);
assertArraysEqual(capitalWords, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);