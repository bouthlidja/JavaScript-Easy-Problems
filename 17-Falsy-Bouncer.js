// Falsy Bouncer
/*
        Description:
          Write a function that removes all falsy values from an array.
          Falsy values in JavaScript are: false, null, 0, "" (empty string),
           undefined, and NaN.**
        Examples:
          removeFalsyValues([0, "hello", false, "", 42, null, undefined, NaN]);// ["hello", 42]

         */
// Solution Steps:
/*
           Step 1: Create a function named removeFalsyValues that takes an array as a parameter.
           Step 2: Initialize a new empty array to store truthy values.
           Step 3:Loop through each element of the input array.
              -Check if the current element is truthy using if (value).
              -If it is truthy, push it into the new array.
          Return the new array after the loop ends.
         */

function removeFalsyValues(arr) {
  let clearArr = [];
  for (let value of arr) {
    if (value) {
      clearArr.push(value);
    }
  }
  return clearArr;
}

console.log(
  removeFalsyValues([0, "hello", false, "", 42, null, undefined, NaN])
);
