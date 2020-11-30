const findKeyByValue = function (object, value) {
  for (const element in object) {
    if (object[element] === value) {
      return element;
    }
  } return undefined;
};

module.exports = findKeyByValue;


