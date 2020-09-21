
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


module.exports = middle;