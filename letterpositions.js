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

// console.log(letterPositions("i love sehdgfsdh vcdfgkfdlb fthsdsdalgbfzlkgjsbld daflkjadslgak"));



module.exports = letterPositions;

                                                                                                                                                                                                                                                                                                                               