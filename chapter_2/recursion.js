// We've seen the % operator can be used to test whether a number
// is even or odd by using % 2 to check whether it is divisible
// by 2. Here's another way to define whether a positive whole
// number is even or odd:
// * Zero is even
// * One is odd
// * For any othe number N, its evenness is the same as N - 2
// Define a recursive function isEven corresponding to this description.
// Test is on 50 and 75. See how it behaves on -1. Why? Can you think
// of a way to fix this?

var isEven = function(n) {
  if(n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
