// Sum All Numbers in a Range
/*
      Description:
Write a function in JavaScript that takes an array containing two numbers, representing the start and end of a given range.
The function should return the sum of all the integers between those two numbers (inclusive).
 Examples:
sumNumbersRange([5, 2]) //14
sumNumbersRange([2, 6]); // 20
// Solution Steps:
/*
Step 1: Define a function that takes an array containing two numbers.
Step 2: Create a variable (sum) and set it to 0 to store the total sum.
Step 3: Check if the array length is equal to 2.
  - If yes, continue execution.
  - If not, return a message indicating the length is not valid.
Step 4: Check the order of the two numbers:
  - If the first number is greater than the second, swap their positions.
Step 5: Create a loop that starts from the smaller number and ends at the larger one:
  - In each iteration, add the current number to the (sum) variable.
Step 6: After the loop ends, return the final value of (sum).

*/

let arr = [5, 2];
function sumNumbersRange(arr) {
  let sum = 0;
  let temp = 0;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else {
    return "is length of array > 2";
  }

  return sum;
}
console.log(sumNumbersRange([5, 2])); // 14
console.log(sumNumbersRange([2, 6])); // 20
