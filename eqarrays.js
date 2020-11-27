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
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
    else if (!assertEqual(array1[i], array2[i])) {
      return false;
    }
  } return true;
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, [4, 5, 6, [7, 8], 9], 16],[1, 2, 3, [4, 5, 6, [7, 8], 9], 16]), true));
console.log(assertEqual(eqArrays([1, 2, [4, 5, 6, [7, 8], 9], 16],[1, 2, 3, [4, 5, 6, [7, 8], 9], 16]), false));


