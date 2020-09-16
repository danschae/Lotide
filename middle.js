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


const middle = function(array) {
  // returned array
  let returnedMiddleArray = [];
  let oddMiddleIndex = Math.floor(array.length / 2); // way to find middle index for odd numbers
  let evenMiddleIndex = (array.length / 2) - 1;   // way to find middle index for even numbers
  // simple if statement for finding the index, don't need loops
  if (array.length % 2 !== 0 && array.length > 2) {
    returnedMiddleArray.push(array[oddMiddleIndex]);
  } else if (array.length > 2) {
    returnedMiddleArray.push(array[evenMiddleIndex]);
    returnedMiddleArray.push(array[evenMiddleIndex + 1]);
  }
  return returnedMiddleArray;
};

console.log(middle([1,2,3,4,5,6,7,8,9,10,11,12,13,15,167]));

assertArraysEqual(middle([1,2,3,4,5]), middle([1,2,3,4,5,6]));