// Mutations
/*
Description:
  Check whether all the letters of the second word are present in the first word,
  regardless of letter case (uppercase or lowercase)."
Examples:
Mutations(["hello","He" ]) // true
Mutations(["hello", "hey"]) // false
*/
// Solution Steps:
/*

Step 1: Create a function that takes an array containing two words as an argument.
Step 2: Convert both words to lowercase to ensure case insensitivity.
Step 3: Loop through each character in the second word (the second element in the array).
Step 4: For each character in the second word, check if it exists in the first word:
  -If the character is not found, return false.
  -If all characters are found, return true.
*/

function mutations(arr) {
  if (arr.length === 2) {
    let word1 = arr[0].toLowerCase();
    let word2 = arr[1].toLowerCase();
    for (let i = 0; i < word2.length; i++) {
      if (!word1.includes(word2[i])) {
        return false;
      }
    }
    return true;
  }
}

console.log(mutations(["He", "hello"])); // true
console.log(mutations(["hello", "hey"])); // false
