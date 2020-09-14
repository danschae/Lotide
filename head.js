const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"👍" Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`"👎" Assertion Failed : ${actual} !== ${expected}`);
  }
};


const head = function(arg){
  return arg[0];
}

console.log(head([0]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");