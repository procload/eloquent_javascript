// console.log(sum(range(1, 10)));

var range = function(start, end, step) {
  var myArray = [];
  var myStep = (step != undefined ) ? step : 1;

  if(myStep > 0) {
    for (var i = start; i <= end; i += myStep) {
      myArray.push(i);
    }
  } else {
    for (var i = start; i >= end; i += myStep) {
      myArray.push(i);
    }
  }
  return myArray;
}

var sum = function(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
