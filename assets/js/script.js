// setting up variables for 4 choice input, using in class solutions as guides.


var isNumber; //user choice numbers
var isSpecialChar; //user choice special characters
var isUpperCase; //user choice upper case
var isLowercase; //user choice lower case
var passLength; //input for password length
var userChoices; // this is variable to gather up the other user input choices 

// making array strings, 4 user inputs specials, numbers, lower, upper

specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
      
// Need to confirm string length before password generation adding submit variable to check
//Using window alert to get length input and verify
 window.alert("Please enter a length between 8 and 128 for your password?");

 


    