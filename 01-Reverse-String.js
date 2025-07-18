/**
  Reverse a String

  Description:
    Write a function that takes a string and returns it after reversing the order of the letters.
 
  Examples:
    reverseString("hello") => "olleh"
    reverseString("world") => "dlrow"
 */

// solution 01
/**
 * Step 1: Write a function that takes a string as a parameter.
 * Step 2: Create an empty variable to store the reversed string.
 * Step 3: Use a loop that starts from the end of the string to the beginning,
 *         and in each iteration, add the current character to the new variable.
 * Step 4: After the loop ends, return the variable that contains the reversed string.
 */
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));
// solution 02
/*
 * Step 1: Write a function that takes a string as a parameter.
 * Step 2: Use the split() function to convert the string into an array of characters.
 * Step 3: Use the reverse() method to reverse the order of the array elements.
 * Step 4: Use the join() method to convert the reversed array back into a string.
 * Step 5:Return the final result, which is the reversed string.

*/
function reverseString(str) {
  let convertArray = str.split("");
  str = convertArray.reverse().join("");
  return str;
}
console.log(reverseString("world"));
