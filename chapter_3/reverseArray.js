var reverseArray = function(existingArray) {
  var myArray = [];
  for(var i = 0; i <= (existingArray.length + 1); i++) {
    myArray.push(existingArray.pop());
  }
  return myArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var preReverse = ["A", "B", "C"];

console.log(preReverse);

// console.log(reverseArray(["1", "2", "3"]));
