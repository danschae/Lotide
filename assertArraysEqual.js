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

assertArraysEqual([1,2,3,4], [1,2,3,4]);