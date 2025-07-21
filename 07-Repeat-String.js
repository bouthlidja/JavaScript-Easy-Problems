// Repeat a String
/*
      Description:
        Write a function in JavaScript that repeats a string a specified number of times (number),
        which is passed as an argument.
        If the number is positive → the string is repeated that many times.
        If the number is zero or negative → the function returns an empty string "".
      Examples:
      repeatString("ab", 0) // ""
      repeatString("ab", 3) // ababab
      */
// Solution Steps:
/*
      Step 1: Define a function that takes two parameters: a string (str)
                and the number of repetitions (num).
      Step 2: Create a variable (result) and assign it an empty string ""
              to store the result.
      Step 3: Check if the number is less than or equal to 0; if so,
              return the empty string immediately.
      Step 4: Create a loop that starts from 0 and runs until the specified number:
              - In each iteration, append the string to the (result) variable.
      Step 5: After the loop ends, return the value stored in the (result) variable.
     */
function repeatString(str, num) {
  let = result = "";
  if (num <= 0) {
    return result;
  }
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}
console.log(repeatString("ab", 3)); // ababab
