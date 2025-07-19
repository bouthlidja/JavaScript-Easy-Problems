/*
 Find the Longest Word in a String
 Description:
  Write a function that takes a string as input and returns the longest word
  contained in the string. If there are multiple words with the same maximum
  length, return the first one that appears. The input string may contain
  punctuation marks, which should be ignored.
 Example :
  getLongestWord("The quick brown fox jumps over the lazy dog."); // Output: "jumps"

*/
// Solution Steps:
/*
    Step 1: Define a function that takes a string as a parameter.
    Step 2: Remove punctuation marks from the string using a regular expression.
    Step 3: Convert the string into an array of words using the split method.
    Step 4: Create a variable to store the longest word found.
    Step 5: Loop through the array using a for loop:
            - In each iteration, check if the current word's length is greater than 
              or equal to the stored word.
            - If it is longer than the stored word, update the variable.
    Step 6: Return the value stored in the variable, which represents
            the longest word in the string.
*/

function getLongestWord(str) {
  // Remove punctuation marks using regular expression
  str = str.replace(/[.,!?;:]/g, "");

  // Split the string into an array of words
  let words = str.split(" ");

  // Initialize variable to store the longest word
  let longest = "";

  // Loop through words to find the longest one
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(getLongestWord("The quick brown fox jumps over the lazy dog.")); // Output: "jumps"
