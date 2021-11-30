# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bluedev773/lotide`

**Require it:**

`const _ = require('@bluedev773/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrOne, arrTwo)`: determines if two arrays are equal
* `assertEqual(actual, expected)`: determines if two operands are equal
* `assertObjectsEqual(objOne, objTwo)`: determines if two objects are equal
* `countLetters(string)`: counts letters in a string
* `countOnly(arr, itemsToCount)`: counts specified items in array
* `findKey(object, callback)`: return key specified by callback function
* `findKeyByValue(object, value)`: return key specified by value 
* `flatten(arr)`: remove nested arrays and return all elements as a single array
* `head(arr)`: return first element of array
* `letterPositions(string)`: return object that holds each unique character of the string as a key and an array of indexes to the characters in the string
* `map(arr, callback)`: creates a new array populated with the results of calling a provided function on every element in the calling array
* `middle(arr)`: returns middle of array
* `tail(arr)`: returns tail of array
* `takeUntil(arr, callback)`: returns original array until callback requirement is met
* `without(arr, remove)`: returns array with specified element removed

