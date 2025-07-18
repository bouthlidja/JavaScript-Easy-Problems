/**
 palindromeCheck

  Description:
    Write a function in JavaScript that checks whether a word or sentence
    is a palindrome, meaning it reads the same backward as forward.
 
  Examples:
    palindromeCheck("A man a plan a canal Panama!") => true
    reverseString("hi javascript") => false
 */

// Solution Steps:
/**
 * Step 1: Write a function that takes a string (a word or sentence) as a parameter.
 * Step 2: Create two variables: one to store the cleaned version of the string (removing symbols and spaces),
 *    and another to store the reversed version of the cleaned string.
 * Step 3: Use a loop to iterate through each character of the original string.
 *    If the character is a letter or digit, add it to the cleaned string.
 * Step 4: Then, reverse the cleaned string using another loop and store the result in the second variable.
 * Step 5: Compare the reversed cleaned string with the original cleaned string (after converting both to lowercase).
 *    If they match, the string is a palindrome.
 * Step 6: Return `true` if the condition is met, otherwise return `false`.
 */

function palindromeCheck(str) {
  let original = str;
  let cleanStr = "";
  let reversedCleanStr = "";
  for (let i = 0; i < original.length; i++) {
    let c = original[i];
    if (
      (c >= "A" && c <= "Z") ||
      (c >= "a" && c <= "z") ||
      (c >= "0" && c <= "9")
    ) {
      cleanStr += c;
    }
  }

  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedCleanStr += cleanStr[i];
  }
  if (reversedCleanStr.toLowerCase() === cleanStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeCheck("A man a plan a canal Panama!")); // true
console.log(palindromeCheck("hi javascript")); // false
