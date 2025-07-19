/*
factorializeNumber
  Description:
    Create a function that calculates the factorial of a positive integer
    passed as an argument.The factorial is the product of the number
    and all positive integers less than it and greater than zero.
 
  Examples:
    console.log(factorializeNumberOne(4)); // "The number must be greater than zero."
    console.log(factorializeNumberTwo(5)); // 120
    console.log(factorializeNumberThree(6)); // 720

//   Solution Steps:
/*
  Solution 1 (using a while loop):
    Step 1: Start with a variable factorial = 1 to store the result.
    Step 2: Create a variable i = 1 as the starting point for the loop.
    Step 3: As long as i <= n, multiply factorial by i.
    Step 4:Then increment the value of i by one.
    Step 5: Finally, return the value of factorial.

  Solution 2 (using a descending for loop):
    Step 1: Start with a variable factorial = 1.
    Step 2: Create a loop that starts from n and decrements down to 1.
    Step 3: In each iteration, multiply factorial by i.
    Step 4: Return the result after the loop ends.

  Solution 3 (using recursion):
    Step 1: Check if n is equal to 0 or 1 — if so, return 1 directly (because 0! and 1! = 1).
    Step 2: Otherwise, return n * factorializeNumberThree(n - 1), i.e., call the same function with a smaller value.
    Step 3: The recursive calls continue until the base case (n = 1 or n = 0) is reached.
    Step 4: The results are then multiplied step by step during the backtracking phase.
*/

//solution 1
function factorializeNumberOne(n) {
  if (n <= 0) return "The number must be greater than zero.";
  let factorial = 1;
  let i = 1;
  while (i <= n) {
    factorial *= i;
    i++;
  }
  return factorial;
}
console.log(factorializeNumberOne(0)); // The number must be greater than zero.

//solution 2
function factorializeNumberTwo(n) {
  if (n <= 0) return "The number must be greater than zero.";
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(factorializeNumberTwo(5)); // 120

//   solution 3
function factorializeNumberThree(n) {
  if (n <= 0) return "The number must be greater than zero.";
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorializeNumberThree(n - 1);
}
console.log(factorializeNumberThree(6)); // 720
