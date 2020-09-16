const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"👍" Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`"👎" Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.split(""); // turn string into an array so i can iterate through it
  const countedLetters = {}; //results will be returned in an array
  for (const letters of string) { // iteration time!
    if (letters !== " ") {
      if (!countedLetters[letters]) { // if doesn't exist yet, make it equal to 1
        countedLetters[letters] = 1;
      // console.log(countedLetters)
      } else {
        countedLetters[letters] += 1;
      // console.log(countedLetters)
      }
    }
  }
  return countedLetters;
};

let result = countLetters("happpy");

assertEqual(result["h"], 1);

console.log(countLetters("Happppppppy dayyyy"));