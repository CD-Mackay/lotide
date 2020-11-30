const eqArrays = require("./eqArrays");

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
module.exports = eqObjects;


