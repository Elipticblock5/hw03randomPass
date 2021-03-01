// setting up variables for 4 choice input, using in class solutions as guides.


var isNumber;
var isSpecialChar;
var isUpperCase;
var isLowercase;
      
      
      
      
      
      // Here we ask the user if they want Uppercase, and store the result (true/false) in a variable.
      var isUpperCase = confirm("Do you want to include UPPERCASE letter?"); 

      // If the user eats meat (isMeatEater === true) we run the following code block.
      if (isUpperCase) {
        alert("Here is an UPPERCASE Letter");
      } else {
        alert("here's a lowercase letter");
      }

      var isSpecialChar = confirm("Do you want to include special characters?");
      // prompt for choosing special character
      if (isSpecialChar) {
        alert("Here is special character");
      } else {
        alert("you don't want special characters");
      }

      //prompt for number
      var isNumber = confirm("Do you want to include numbers?");
      if (isNumber) {
        alert("here is a number");
      } else {
        alert("you have chosen no numbers");
      }

      //prompt for length
      var passLength = confirm(
        "How many characters do you want your password? Enter a number between 8 and 128"
      );
      console.log(passLength);

      // If the above condition isn't met (isMeatEater !== true), we run the following block of code instead.

      // Array of zoo animals.
      var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

      // Loops through the array to print each zoo animal.
      for (var i = 0; i < 4; i++) {
        // Logs the animal at index position i to the console. This code is executed each we go through the loop.
        console.log(zooAnimals[i]);
      }

      <!-- <script type="text/javascript">
      // Loop 10 times
      for (var i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
        var num = Math.floor(Math.random() * 10) + 1;

        // Display in console
        console.log(num);
      }
    