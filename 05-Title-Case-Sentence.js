// Title Case a Sentence
/*
  Description:
    Write a function in JavaScript that capitalizes the first letter of each
    word in a given string, while keeping the rest of the letters in each word
    unchanged (whether lowercase or uppercase).
  Examples:
    capitalizeFirstLetters("hello javascript WORLD") // Hello Javascript WORLD
*/
// Solution Steps:
/*
  Step 1: Create a function that takes a string as a parameter.
  Step 2: Convert the input string into an array of words.
  Step 3: Loop through each element (word) in the array using a loop:
    - Convert the first letter of the word to uppercase 
    - Concatenate this uppercase letter with the rest of the word (excluding the first character)
    - Reassign the modified word back into the array.
  Step 4: After modifying all words, join the array elements back into a single string.
  Step 5: Return the resulting string from the function.
*/
function capitalizeFirstLetters(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(capitalizeFirstLetters("hello javascript WORLD"));
