const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countletters");
const countOnly = require("./countOnly");
const findkey = require("./findkey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("map");
const takeUntil = require("takeUntil");
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findkey: findkey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil
};
