const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let c = 0; c < array[i].length; c++) {
        result.push(array[i][c]);
      }
    } else result.push(array[i]); 
  } return result;
};

module.exports = flatten;


