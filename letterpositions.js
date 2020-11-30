const letterPositions = function(string) {
  let result = {};
  let spaceregex = /\s/;
  for (let i = 0; i < string.length; i++) {
    if (!spaceregex.test(string[i])) {
      if (result[string[i]]) {
        result[string[i]].push(i);
      } else {
        result[string[i]] = [i];
      }
    }
  } return result;
};

module.exports = letterPositions;




