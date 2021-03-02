  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   // Create strings  for the four user inputs to be used in random generator
   var lowerCase = "abcdefghijklmnopqrstuvwxyz"
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
   var specialCase = "!@#$%^&*(){}[]<>=-_+/?~|"
   var number = "0123456789"


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
