const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let c = 0; c < array[i].length; c++) {
        result.push(array[i][c]);
      }
    } else result.push(array[i]); 
  } return result;
}
console.log(flatten([1, 2, [3, 6, 7, 4], 5, [6, 7, 8]]));
