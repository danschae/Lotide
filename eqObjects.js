const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"👍" Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`"👎" Assertion Failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo){
  if (arrayOne.length !== arrayTwo.length){
    return false;
  }
   else{
    for (let i = 0; i < arrayOne.length; i++){
      if(arrayOne[i] !== arrayTwo[i]){
        return false;
      }
    }
    return true;
  } 
}


const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  } else {
    for (const key of objectOneKeys) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } else {
          return false;
        }
      }
    }
    return true;
  }
};

