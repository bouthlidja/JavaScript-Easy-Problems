// Truncate a String
/*
      Description:
      Write a function in JavaScript that shortens a string if it exceeds
       a specified length.
      If the string exceeds this length, it is truncated and three dots "..."
       are added at the end.
      If it is shorter than or equal to the limit, it is returned unchanged.
      Examples:
      truncateString("hello word", 5) // hello...
      truncateStringTwo("hello word", 5) // hello...
      */
// Solution Steps:
/*
      Solution One;
      Step 1: Define a function that takes two parameters:
              a string (str) and a number (num).
      Step 2: Create a variable (result) and initialize it 
              with an empty string "" to store the result.
      Step 3: Check if the length of the string is greater
              than the number (num). If so, create 
              a loop that starts from 0 and continues 
              up to the specified number:
         - In each iteration, add a character from 
            the string to the (result) variable.
         - After the loop ends, return 
            the final value stored in the (result) variable.
      Step 4: Check if the number (num) is less than or equal to 0. If so, 
              return the original string as is.
    Solution Two;
    Step 1: Define a function that takes two parameters:
            a string (str) and a number (num).
    Step 2: Check if the length of the string is greater than the given number.
         - If true: use the `slice()` method to extract the portion 
            of the string up to the given number,
           append "..." at the end, and return the result.
         - If false: return the original string unchanged.
     */
function truncateStringOne(str, num) {
  let result = "";
  if (str.length > num) {
    for (let i = 0; i < num; i++) {
      result += str[i];
    }
    return result + "...";
    //   result = str.slice(0, num) + "...";

    return result;
  } else {
    return str;
  }
}
console.log(truncateStringOne("hello word", 5));

function truncateStringTwo(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateStringTwo("hello word", 5)); // hello...
