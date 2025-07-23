// Where do I Belong
/*
  Description:
    Write a function that takes a sorted (or unsorted) array
    and a number as two arguments.
    The task of the function is to return the appropriate
    index at which the number should be inserted into the array after sorting 
    it in ascending order, so that the array remains sorted.
    - If the number already exists in the array,
    return its current index.
    - If the number does not exist, first insert it into the array,
    then sort the array, and finally return its new index
  Examples:
      getIndexToInsOne([1, 3, 5, 6], 4); // 2
      getIndexToInsTwo([1, 3, 5, 6], 6); // 3

  */
// Solution Steps:
/*
     Solution One: (Using Manual Bubble Sort)
        Step 1: Create a function getIndexToInsOne that takes
          an array and an element as arguments.
        Step 2: Check if the element is not present in the array:
        Step 3: If it's not present → add it to the array.
          -Sort the array manually using the Bubble Sort algorithm.
        Step 4: Loop through the elements of the array to find the index
            of the element.
        Step 5: Return that index.

    Solution Two: (Using sort and indexOf)
      Step 1: Create a function getIndexToInsTwo that takes an array
        and an element as parameters.
      Step 2: If the element is not already
              in the array → add it to the array.
      Step 3: Use the sort() function to sort 
              the array in ascending order.
      Step 4: Use indexOf to find the index of the element.
      Step 5: Return that index.
     */
//   solution 01
function getIndexToInsOne(arr, ele) {
  let indexElement;
  if (!arr.includes(ele)) {
    arr.push(ele);
    let temp;
    //  algorthim Bubble Sort:
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
          temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      indexElement = i;
    }
  }

  return indexElement;
}
console.log(getIndexToInsOne([1, 3, 5, 6], 4)); // 2
//   solution 02
function getIndexToInsTwo(arr, ele) {
  if (!arr.includes(ele)) arr.push(ele);
  arr.sort((a, b) => a - b);
  return arr.indexOf(ele);
}

console.log(getIndexToInsTwo([1, 3, 5, 6], 6)); // 3
