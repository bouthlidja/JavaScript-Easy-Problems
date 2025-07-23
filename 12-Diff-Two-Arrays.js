// Diff Two Arrays
/*
       Description:
        Write a function in JavaScript called `diffArrays` that takes two arrays as arguments,
        and returns a new array containing the values that are present in one of the arrays 
        but not in both (i.e., the values that are not shared between the two arrays).
       Examples:
       diffArrays([2, 1, 3, 5], [1, 2, 3, 4, 6]); //[5, 4, 6]
      */
// Solution Steps:
/*
      Step 1: Create a function that accepts two arrays as parameters
      Step 2. Create a new array `result` to store the unique values.
      Step 3. Use a loop to iterate through the elements of the first array:
        - If the element is not found in the second array → add it to `result`.
      Step 4. Use a loop to iterate through the elements of the second array:
        - If the element is not found in the first array → add it to `result`.
      Step 5. Return the `result` array after the iteration is complete.
     */
function diffArrays(arr1, arr2) {
  let reslut = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) !== true) {
      reslut.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) !== true) {
      reslut.push(arr2[i]);
    }
  }
  return reslut;
}
console.log(diffArrays([2, 1, 3, 5], [1, 2, 3, 4, 6])); //[5, 4, 6]
