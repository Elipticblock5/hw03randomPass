  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   // Create strings  for the four user inputs to be used in random generator
   var lowerCase = "abcdefghijklmnopqrstuvwxyz"
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
   var specialCase = "!@#$%^&*(){}[]<>=-_+/?~|"
   var number = "0123456789"





       // lenght of passwork prompt for user
       var passLength = prompt("How many regular and special characters would you like your password to be. Please choose between 8 and 128");

       // Ask if user want to include the following 4 criteria
    var lowerCaseYes = window.confirm("Click OK to confirm including lowercase characters.")

    var upperCaseYes = window.confirm("Click OK to confirm including uppercase characters.")

    var numericYes = window.confirm("Click OK to confirm including numeric characters.")

    var specialCaseYes = window.confirm("Click OK to confirm including special characters.")




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
