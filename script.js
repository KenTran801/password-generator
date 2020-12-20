// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variables:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var newPassword;

// Functions for password criteria (lowercase, uppercase, numeric, and/or special characters)
generateBtn.addEventListener("click", function () {

  var passwordLength = parseInt(prompt("Please select the length of your password. Choose a length between 8 and 128 characters."));
  if (passwordLength > 128 || passwordLength < 8) {
    passwordLength = alert("Please select a number in bewteen 8 and 128.");
    return;
  }

  var containNumbers = confirm("Would you like to contain numbers in your password?");
  if (containNumbers === false) {
    alert("Your password will not contain random assigned numbers.")
  }

  var containCharacters = confirm("Would you like to contain a special characters in your password? (Example: !, #, $, %, etc.)");
  if (containCharacters === false) {
    alert("Your password will not contain special characters.")
  }

  var containUppercase = confirm("Would you like to contain uppercase letters in your password?");
  if (containUppercase === false) {
    alert("Your password will not contain uppercase letters.")
  }

  var containLowercase = confirm("Would you like to contain lowercase letters in your password?");
  if (containLowercase === false) {
    alert("Your password will not contain lowercase letters.")
  }

  if (containNumbers === false && containCharacters === false && containUppercase === false && containLowercase === false) {
    alert("At least one of the password criteria must be selected.")
  };

  

});



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


