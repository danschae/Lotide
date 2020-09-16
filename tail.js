const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"👍" Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`"👎" Assertion Failed : ${actual} !== ${expected}`);
  }
};

const tail = function(arg) {
  let newArr = arg;
  newArr = newArr.slice(1);
  console.log(newArr);
  return newArr;
}; 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!