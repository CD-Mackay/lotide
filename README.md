# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cd-mackay/lotide`

**Require it:**

`const _ = require('@cd-mackay/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first item of a given array
* `function2(middle)`: returns the middle element(s) of a given array
* `function3(eqarrays)`: tests if two provided arrays are equal
* `function4(assertArraysEqual)`: Provides visible assertions that arrays are/are not equal
`function5(assertEqual)`: Determines if two elements are equal
`function6(eqObjects)`: Determines if two {objects} are equal
`function7(assertObjectsEqual)`: Provides feedback if two objects are/are not equal
`function8(countLetters)`: Counts all the occurences of different characters in a string, returns an object
`function9(countOnly)`: Counts all instances of given items in an array
`function10(findKey)`: Uses object and callback, returns first key in which callback(key) is truthy
`function11(findKeyByValue)`: Searches provided object and returns first key which matches given value
`function12(flatten)`: Flattens nested/embedded arrays into a single array
`function13(letterPositions)`: Determines the index value of each letter in a given string
`function14(map)`: implements a provided callback function on each element of an array
`function15(takeUntil)`: Iterates through an array, returns everything previous to the index in which the callback function returned true. 
