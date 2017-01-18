/* Create a program that prints an 8x8 chessboard that looks like:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

 When that is created, store a variable named 'size' that will produce a
 SizexSize grid instead */

var size = 12;
 for(var counter = 0; counter < size; counter++) {
   var line = "";

   if(counter % 2 != 0) {
     line += " ";
   }

   for(var lineCounter = 0; lineCounter < size; lineCounter++) {
     if(lineCounter % 2 == 0) {
       line += "#";
     } else {
       line += " ";
     }
   }
   console.log(line);
 }
