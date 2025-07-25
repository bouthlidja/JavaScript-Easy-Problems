// Slasher Flick
/*
        Description:
            Write a JavaScript function that removes a specified number
            of elements from the beginning of an array.
         Examples:
            dropElementsSolitionOne([1, 2, 3, 4, 5], 2) // [3, 4, 5]
            dropElementsSolitionTwo([1, 2, 3, 4, 5], 3) //  [4, 5]
        */
// Solution Steps:
/*
    Solution One:
        Step 1: Create a function that takes an array and the number of elements to remove.
        Step 2: Initialize a new array to store the remaining elements.
        Step 3: Loop through the original array:
            - Check if the current index is greater than or equal to the number to remove.
            - If the condition is true, push the element to the new array.
        Step 4: Return the new array.

      Solution Two:
        Step 1: Create a function that takes an array and a number representing how many elements to remove from the beginning.
        Step 2: Use the built-in slice() method to return a portion of the array:
            - Pass "count" as the starting index to slice().
            - This will effectively remove the first "count" elements.
        Step 3: Return the resulting array.
        
      */
// solition 01
function dropElementsSolitionOne(arr, count) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= count) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
// solition 02
function dropElementsSolitionTwo(arr, count) {
  return arr.slice(count);
}

console.log(dropElementsSolitionOne([1, 2, 3, 4, 5], 2));
console.log(dropElementsSolitionTwo([1, 2, 3, 4, 5], 3));
