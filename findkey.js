const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// ------------------------------_-_-__---___------

const findKey = function (object, callback) {
  let result = "";
  for (let element in object) {
    if (callback(object[element])) {
      result = element;
      return result;
    }
  } 
}

const restuarantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const twoStars = findKey(restuarantRatings, x => x.stars === 2);
const threeStars = findKey(restuarantRatings, x => x.stars === 3);

const hasMoons = {Mercury: false, Jupiter: true, Venus: true, earth: true};
const noMoons = findKey(hasMoons, x => x === false);
const firstWithMoons = findKey(hasMoons, x => x === true);
assertEqual(noMoons, "Mercury");
assertEqual(twoStars, "noma");
assertEqual(threeStars, "Akaleri");
assertEqual(firstWithMoons, "Jupiter");