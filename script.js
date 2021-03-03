  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
   // Create strings  for the four user inputs to be used in random generator
   // will need to loop over strings based on choices.
   var lowerCase = "abcdefghijklmnopqrstuvwxyz"
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
   var specialCase = "!@#$%^&*(){}[]<>=-_+/?~|"
   var number = "0123456789"

 // setting variable to remember length of password from user input.
var passLength = prompt("How many regular and special characters would you like your password to be. Please choose between 8 and 128");

if (passLength >=8 && passLength <=128) {

  console.log(passLength);
}
//alert if wrong
  else {
    alert("Please enter a value between 8 and 128");
          }


//need to create variable for selections
  var userSelections = [];

var lowerCaseYes = window.confirm("Click OK to confirm including lowercase characters.")
var upperCaseYes = window.confirm("Click OK to confirm including uppercase characters.")

// need to true value inputs, starting with two to test
if (lowerCase == true || upperCase == true)
 
 if (lowerCase == true) {
   userSelections += lowerCase;
 }

 if (upperCase == true) {
   userSelections += upperCase
 }

 console.log(userSelections); 

//Random loop strings working






// string loops

for (let i = 0; i < lowerCase.length; i++) {
  //testing random function for one selector lowerCase here
   var lowerCaseChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
console.log(lowerCaseChoice)


for (let i = 0; i < upperCase.length; i++) {
  //testing random function for one selector upperCase here
   var upperCaseChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
}
console.log(upperCaseChoice)

for (let i = 0; i < specialCase.length; i++) {
  //testing random function for one selector specialCase here
   var specialCaseChoice = specialCase[Math.floor(Math.random() * specialCase.length)];
}
console.log(specialCaseChoice)

for (let i = 0; i < number.length; i++) {
  //testing random function for one selector number here
   var numberCaseChoice = number[Math.floor(Math.random() * number.length)];
}
console.log(numberCaseChoice);










      

       // here are the 4 window prompts for options.
    //var lowerCaseYes = window.confirm("Click OK to confirm including lowercase characters.")

    //var upperCaseYes = window.confirm("Click OK to confirm including uppercase characters.")

    //var numericYes = window.confirm("Click OK to confirm including numeric characters.")

    //var specialCaseYes = window.confirm("Click OK to confirm including special characters.")




  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//};

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
