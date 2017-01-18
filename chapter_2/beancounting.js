// Write a function that takes a string as its only argument and returns
// a number that counts how many uppercase "B"s are in that string

var countChar = function(myString, myChar) {
  var counter = 0;
  for(var i = 0; i < myString.length; i++) {
    if (myString.charAt(i) == myChar) {
      counter++;
    }
  }
  return counter;
}

var countBs = function(myString) {
  return countChar(myString, "B");
}

console.log(countBs("BitchesBeCray"));
