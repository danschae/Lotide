const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`"👍" Assertion Passed `);
  } else {
    console.log(`"👎" Assertion Failed `);
  }
};

const flatten = function(arr) {
  // i will return everything to a "flattened" array
  let flattenedArray = [];
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // if it's an array, have it concat with the other arrays
    if (Array.isArray(arr[i]) === true) {
      flattenedArray = flattenedArray.concat(arr[i]);
    } else {
      flattenedArray.push(arr[i]);
    }
  } return flattenedArray;
};

console.log(flatten([1, 2, [3, [4]], 5, [6]]));

assertArraysEqual(flatten([1,2,3,[4,5],6, [7,8]]), flatten([1,2,3,[4,5],6, [7,8]])) // true
assertArraysEqual(flatten([1,2,3,[4,5],6, [7,8]]), flatten([1,2,3,[4,5],6, [7,8]])) // fail