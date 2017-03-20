/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var hashString = "#";
for(i = 0; i < 7; i++) {
  console.log(hashString);
  hashString += "#";
}


/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a
significant percentage of programmer candidates. So if you solved it, you’re
now allowed to feel good about yourself.)
*/

for(i =1; i < 100; i++) {
  if( i % 3 == 0 && i % 5 == 0 ) {
    console.log("FizzBuzz");
  } else if ( i % 3 == 0 ) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height.
*/

// Initialises string var
var string = "";
// Sets gridSize
var gridSize = 8;
//Loops through the entire gridSize
  for(i = 0; i < gridSize; i++) {
    // On odd lines, patten is " # # #"
    if (i % 2 == 0) {
      for(j = 0; j < gridSize; j++) {
        if (j % 2 == 0) {
          string += " "
        } else {
          string += "#";
        }
      }
    } else {
      for(j = 0; j < gridSize; j++) {
        if (j % 2 == 0) {
          // On odd lines, pattern is "# # # "
          string += "#"
        } else {
          string += " ";
        }
      }
    }
    // Adds end of line character
    // At end of each loop through
    // One line
    string += "\n";
  }

  console.log(string);
