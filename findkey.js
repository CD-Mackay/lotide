

const findKey = function (object, callback) {
  let result = "";
  for (let element in object) {
    if (callback(object[element])) {
      result = element;
      return result;
    }
  } 
}

module.exports = findKey;