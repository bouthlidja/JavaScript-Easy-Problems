// Boo who
/*
      Description:
      Write a function in JavaScript that checks whether 
      the given input is a real Boolean value (i.e., only true or false).
        • If it is → return true.
        • If it is not → return fals
      Examples:
      booWhoOne(true); //  true
      booWhoOne(false); // true
      booWhoOne("false"); // false
      booWhoTow(0); // false
      booWhoTow(null); // false
      booWhoTow(undefined); // false
      */
// Solution Steps:
/*
      Solution One
      Step 1: Define a function that takes a single parameter (input).
      Step 2: Use a conditional statement (if) to check whether
              the type of the value is Boolean using typeof.
              - If the value is Boolean → return true.
              - If it is not Boolean → return false.
      Solution Two
      Step 1: Define a function that takes a single parameter (input).
      Step 2: Use a return statement directly to check the type using typeof:
        - Returns true if the value is Boolean.
        - Returns false if it is not.
      */
// Solution One
function booWhoOne(input) {
  if (typeof input === "boolean") {
    return true;
  } else {
    return false;
  }
}
console.log(booWhoOne(true)); //  true
console.log(booWhoOne(false)); // true
console.log(booWhoOne("false")); // false
// Solution Two
function booWhoTow(input) {
  return typeof input === "boolean";
}
console.log(booWhoTow(0)); // false
console.log(booWhoTow(null)); // false
console.log(booWhoTow(undefined)); // false
