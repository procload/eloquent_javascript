/* Print numbers from 1 to 100, with numbers divisible by 3 printing 'Fizz'
and numbers divisible by 5 printing 'Buzz'. Print "FizzBuzz" when numbers
are divisible by both 3 and 5. */

for(var counter = 1; counter <= 100; counter++) {
  var output = "";
  if (counter % 3 == 0) {
    output += "Fizz";
  }
  if (counter % 5 == 0) {
    output += "Buzz";
  }
  console.log(output || counter);
}
