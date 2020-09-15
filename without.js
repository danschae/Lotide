const eqArrays = function (arrayOne, arrayTwo){
  if (arrayOne.length !== arrayTwo.length){
    return false;
  } else{
    for (let i = 0; i < arrayOne.length; i++){
      if(arrayOne[i] !== arrayTwo[i]){
        return false;
      }
    }
    return true;
  } 
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`"👍" Assertion Passed `);
  } else {
    console.log(`"👎" Assertion Failed `);
  }
};


const without = function (arrayOne, arrayTwo){
  //make sure input is an array
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false){
    return false;
  }
  let newArray = [];
  // loop through the first array
  for (let i = 0; i < arrayOne.length; i++){
    // while looping through the first array, compare it with the second
    for (let j = 0; j < arrayTwo.length; j++){
      if(arrayOne[i] !== arrayTwo[j]){
        // turn the index into a variable, looks nicer
        const sourceArrayElement = arrayOne[i];
        newArray.push(sourceArrayElement)
      }
    }
  } return newArray;
}

const words = ["hello", "world", "lighthouse", "chicken", 4];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);