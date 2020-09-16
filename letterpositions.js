const letterPositions = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    let position = results[letter]; //assign results[letter] to a variable because it repeats
    if (letter !== " ") {
      if (!position) {
        results[letter] = [sentence.indexOf(letter)]; // use results[letter] because otherwise i'm reassigning the variable
      } else {
        position.push(sentence.indexOf(letter, position[position.length - 1] + 1)); // use the indexOF method to have it search starting from the most recent position + 1
      }
    }
  }
  return results;
};

console.log(letterPositions("i love sehdgfsdh vcdfgkfdlb fthsdsdalgbfzlkgjsbld daflkjadslgak"));




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

assertArraysEqual(letterPositions("hello").e , [2]);