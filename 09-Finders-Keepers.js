// Finders Keepers
/*
      Description:
        Write a function in JavaScript that takes an array and a predicate
        function (passed as a callback), and returns the first element
        in the array that satisfies the ccallbackondition.
        If no element satisfies the condition, the function returns undefined.


      Examples:
      findersKeepers([1, 3, 5, 4, 6], (ele) => ele % 2 === 0) // 4
      */
// Solution Steps:
/*
      Step 1: Create a function that takes two parameters: an array and a predicate function (callback).
      Step 2: Use a loop to iterate over all elements in the array.
          - In each iteration, check if the callback returns true for the current element.
          - If the condition is met, return that element immediately.
      Step 3: If the loop finishes without finding a matching element, return undefined.
     */

function findersKeepers(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
console.log(findersKeepers([1, 3, 5, 4, 6], (ele) => ele % 2 === 0)); // 4
