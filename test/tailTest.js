const tail = require('../tail');
const assertEqual = require('../assertEqual');

const test = [2, 3, 4];
const test2 = tail([1, 2, 3, 4]);
assertEqual(test[0], test2[0]);
