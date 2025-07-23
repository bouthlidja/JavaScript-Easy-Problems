// Seek and Destroy
/*
      Description:
      Write a JavaScript function named seedDestroy that takes an initial
      array and a variable number of additional arguments.
      The function should remove all elements from the original
      array that match any of the additional arguments
      and return a new array with the remaining elements.
      Examples:
      seedDestroy([2, 4, 5, 2, 7], 2, 4); // [5, 7]
      */
// Solution Steps:
/*
      Step 1: Create a function called seedDestroy that takes an array as the first parameter,
              and the rest of the values using the rest operator ...arg.
              Store the values to be removed in a variable (like eleDelete).
      Step 2: Create a new array result to store the values that should not be deleted.
      Step 3: Use a loop to iterate over the elements of the original array:
      Step 4: If the element is not included in eleDelete, add it to result.
      Step 5: Return the result array.
     */
function seedDestroy(arr, ...arg) {
  let eleDelete = arg;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!eleDelete.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(seedDestroy([2, 4, 5, 2, 7], 2, 4)); // [5, 7]
