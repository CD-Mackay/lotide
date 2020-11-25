const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾🎾Assertion Passed: "${actual}" === "${expected}" `);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎🍎Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(string) {
  let result = {};
  string = string.replace(/\s+/g, '');
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}


assertEqual(countLetters("freedom").f, 1);
assertEqual(countLetters("freedom").e, 2);
assertEqual(countLetters("mississippi").s, 4);
assertEqual(countLetters("mississippi").i, 4);
assertEqual(countLetters("mississippi").p, 2);
