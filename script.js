// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create strings  for the four user inputs to be used in random generator
// will need to loop over strings based on choices.
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCase = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//need to create variable for selections
var userSelections = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // alert if no userSelections

  /*else {
    alert("Please select at least one option")
  }*/

  // setting variable to remember length of password from user input.
  var passLength = prompt(
    "How many regular and special characters would you like your password to be. Please choose between 8 and 128"
  );

  //this verifies length condition

  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
  }
  //alert if wrong
  else {
    alert("Please enter a value between 8 and 128");
  }

  var lowerCaseYes = window.confirm(
    "Click OK to confirm including lowercase characters."
  );
  var upperCaseYes = window.confirm(
    "Click OK to confirm including uppercase characters."
  );
  var numericYes = window.confirm(
    "Click OK to confirm including numeric characters."
  );
  var specialCaseYes = window.confirm(
    "Click OK to confirm including special characters."
  );

  // need to true value inputs, these are logging now

  if (
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
  console.log(userSelections);

  generatePassword(passLength);

  //Random loop strings working

  // string loops

  for (let i = 0; i < lowerCase.length; i++) {
    //testing random function for one selector lowerCase here
    var lowerCaseChoice =
      lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  console.log(lowerCaseChoice);

  for (let i = 0; i < upperCase.length; i++) {
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
  console.log(numberCaseChoice);

  //variable set, time to generate password

  //password Generator

  function generatePassword(length) {
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
  }
};

//Add event listener to generate button
//document.getElementById("password").value = generatePassword(length);
generateBtn.addEventListener("click", writePassword);
