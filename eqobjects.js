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
    if (typeof object1[element] === "object" && !Array.isArray(object1[element])) {
      if (!eqObjects(object1[element], object2[element])) {
        return false;
      } 
  } else if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
  } 
}  return true;
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
console.log(eqObjects({a: 2, b: 3, c: {c: 2, d: 4}, d: 5, d: [1, 2, 3, 4, 5]}, {a: 2, b: 3, c: {c: 2, d: 4}, d: 5, d: [1, 2, 3, 4, 5]}))
