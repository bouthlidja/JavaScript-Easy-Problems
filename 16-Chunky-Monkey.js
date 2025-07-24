// Chunky Monkey
/*
    Description:
        Write a function that takes an array and a positive integer 
        representing the size of each group. 
        The function should return a new array containing subarrays (chunks) 
        of the original elements, where each group has a length equal to the specified size,
        except possibly the last one,
        which may contain fewer elements if there are not enough items left.
        Examples:
        console.log(chunkyMonkey([1, 2, 3, 4, 5], 0));
        console.log(chunkyMonkey([1, 2, 3, 4, 5], 6));
        chunkyMonkey([1, 2, 3, 4, 5], 2)

    */
// Solution Steps:
/*
        Step 1: Create a function that accepts an array and a size.
        Step 2: Create an empty array to store the subgroups.
        Step 3: Check that the size is greater than 0, and return an error message if not.
        Step 4: If the array length is smaller than the size,
        return the array wrapped inside a new array as-is.
        Step 5: Loop through the original array with a step equal to the size:
                - In each iteration, take a portion of the original array using slice.
                - Add this portion to the new array.
        Step 6: Return the new array after the loop ends.
    */

function chunkyMonkey(arr, size) {
  let newArr = [];
  if (size <= 0) return "Invalid size. It must be greater than 0.";
  if (arr.length < size) return [arr];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
console.log(chunkyMonkey([1, 2, 3, 4, 5], 0)); // "Invalid size. It must be greater than 0."
console.log(chunkyMonkey([1, 2, 3, 4, 5], 6)); // [1, 2, 3, 4, 5]
console.log(chunkyMonkey([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]];
