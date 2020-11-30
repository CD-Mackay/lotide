const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 !== 0) {
    result.push(array[(array.length - 1) / 2]);
  } else result = (array.slice((array.length - 1) / 2, (((array.length + 1) / 2) + 1)));
  console.log(result);
  return result;
};
module.exports = middle;
