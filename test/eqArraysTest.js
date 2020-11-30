const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
 console.log(assertEqual(eqArrays([1, 2, 3, [4, 5, 6, [7, 8], 9], 16],[1, 2, 3, [4, 5, 6, [7, 8], 9], 16]), true));
 console.log(assertEqual(eqArrays([1, 2, [4, 5, 6, [7, 8], 9], 16],[1, 2, 3, [4, 5, 6, [7, 8], 9], 16]), false));