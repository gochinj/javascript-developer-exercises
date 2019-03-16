let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual is a company that sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW
  const words = str.split(" ").map(word => {
    let result = ""
    for(let i=word.length -1; i >= 0; i--) {     
      
      result += word[i]
    }
    
    return result;
  });
 
  return words.join(" ");
  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)

assert.equal(reversedWords, 'nneP lautuM si a ynapmoc taht slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 8_reverse_words.js":

Success
nneP lautuM si a ynapmoc taht slles efil ecnarusni

*/