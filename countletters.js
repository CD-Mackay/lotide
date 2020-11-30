const countLetters = function(string) {
  let result = {};
  string = string.replace(/\s+/g, '');
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result;
}

module.exports = countLetters;
