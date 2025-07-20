// Confirm the Ending
/*
 Description:
  Write a function in JavaScript that checks whether a given sentence (string)
  ends with a specific word passed as a parameter.
  If the sentence ends with that word, the function should return true;
  otherwise, it should return false.
 Examples:
  ConfirmTheEnding("JavaScript is powerful!", "powerful") // true
  ConfirmTheEnding("JavaScript is powerful", "good") // false
*/
// Solution Steps:
/*
  Solution One
  Step 1: Create a function that takes a sentence and a word as parameters.
  Step 2: Remove punctuation from the sentence to avoid mismatch.
  Step 3: Split the sentence into an array of words using split(" ").
  Step 4: Check if the last word in the array matches the given word:
    - If it matches, return true.
    - Otherwise, return false.

  Solution Two
  Step 1: Create a function that takes a sentence and a word as parameters.
  Step 2: Remove punctuation from the sentence to avoid mismatch.
  Step 3: Use the built-in method endsWith() to check if the sentence ends with the word.
  Step 4: Return true if it matches, and false if it doesn't.
*/

function ConfirmTheEnding(sentence, word) {
  sentence = sentence.replace(/[.,!?;:]/g, "");
  let words = sentence.split(" ");
  return words[words.length - 1] === word;
}
console.log(ConfirmTheEnding("JavaScript is powerful", "powerful")); // true
console.log(ConfirmTheEnding("JavaScript is powerful", "good")); // false

function ConfirmTheEnding2(sentence, word) {
  sentence = sentence.replace(/[.,!?;:]/g, "");
  return sentence.endsWith(word);
}

console.log(ConfirmTheEnding2("JavaScript is powerful!", "powerful")); // true
console.log(ConfirmTheEnding2("JavaScript is powerful", "good")); // false
