const countOnly = function(array, object) {
    let result = {};
    for (const item of array) {
      if (object[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
    } return result;
  }

  module.exports = countOnly;


