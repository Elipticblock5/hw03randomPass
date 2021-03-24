// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create strings  for the four user inputs to be used in random generator
// will need to loop over strings based on choices.
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
var specialCase = "!@#$%^&*(){}[]<>=-_+/?~|"
var numberCase = "0123456789"

//need to create variable for selections
//var userSelections = [];
//console.log(userSelections)

// Write password to the #password input
function generatePassword() {
  var password = "";
  var passwordChars = "";
  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;

  // alert if no userSelections

  /*else {
    alert("Please select at least one option")
  }*/

  // setting variable to remember length of password from user input.
  var passLength = prompt(
    "How many regular and special characters would you like your password to be. Please choose between 8 and 128"
  );
  passLength = parseInt(passLength);

  //this verifies length condition

  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
  }
  //alert if wrong
  else {
    alert("Please enter a value between 8 and 128");
    return "";
  }

  //prompt for lower case "yes or no"
  var lowerCaseYes = window.confirm(
    "Click OK to confirm including lowercase characters."
  );
    
if (lowerCaseYes) {
  passwordChars += lowerCase;
}

//prompt for uppercase "yes or no"
  var upperCaseYes = window.confirm(
    "Click OK to confirm including uppercase characters."
  );

if (upperCaseYes) {
  passwordChars += upperCase;
}

//prompt for numbers
var numericYes = window.confirm(
    "Click OK to confirm including numeric characters."
  );

if (numericYes) {
  passwordChars += numberCase;
}

//prompt for special characters
  var specialCaseYes = window.confirm(
    "Click OK to confirm including special characters."
  );

if (specialCaseYes) {
  passwordChars += specialCase
}

for (var i = 0; i < passLength; i++) {
  password = passwordChars[Math.floor(Math.random() * passwordChars.length)]
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password")
  passwordText.value = password;
}



  // need to true value inputs, these are logging now

  /* if (
    lowerCaseYes == true ||
    upperCaseYes == true ||
    numericYes == true ||
    specialCaseYes == true
  ) {
    if (lowerCaseYes == true) {
      userSelections += lowerCase;
    }

    if (upperCaseYes == true) {
      userSelections += upperCase;
    }

    if (numericYes == true) {
      userSelections += number;
    }

    if (specialCaseYes == true) {
      userSelections += specialCase;
    }
  }
  console.log(userSelections); */

   // generatePassword(passLength);

  //Random loop strings working

  // string loops

  //for (let i = 0; i < lowerCase.length; i++) {
    //testing random function for one selector lowerCase here
    //var lowerCaseChoice =
     /* lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  console.log(lowerCaseChoice); */

  /* for (let i = 0; i < upperCase.length; i++) {
    //testing random function for one selector upperCase here
    var upperCaseChoice =
      upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  console.log(upperCaseChoice);

  for (let i = 0; i < specialCase.length; i++) {
    //testing random function for one selector specialCase here
    var specialCaseChoice =
      specialCase[Math.floor(Math.random() * specialCase.length)];
  }
  console.log(specialCaseChoice);

  for (let i = 0; i < number.length; i++) {
    //testing random function for one selector number here
    var numberCaseChoice = number[Math.floor(Math.random() * number.length)];
  }
  console.log(numberCaseChoice); */

  //variable set, time to generate password

  //password Generator

  /*function generatePassword(length) {
    var result = "";
    var characters = userSelections;
    var charLength = passLength.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charLength.length)
      );
    }
    console.log(result);
    return result;
  } */


//Add event listener to generate button
//document.getElementById("password").value = generatePassword(length);
}
generateBtn.addEventListener("click", generatePassword);


