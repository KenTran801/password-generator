// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variables:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//New password
var password = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
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
  }

  //Function for each crtieria - i.e. random uppercase letter, lowercase letter, number, special character
  for (var i = 0; i < passwordLength; i++) {
    if (containUppercase === true) {
      var randomNumber = Math.floor(Math.random() * 26)
      password.push(uppercaseAlphabet[randomNumber])
    }
    if (containLowercase === true) {
      var randomNumber = Math.floor(Math.random() * 26)
      password.push(lowercaseAlphabet[randomNumber])
    }
    if (containNumbers === true) {
      var randomNumber = Math.floor(Math.random() * numbers.length)
      password.push(numbers[randomNumber])
    }
    if (containCharacters === true) {
      var randomNumber = Math.floor(Math.random() * characters.length)
      password.push(characters[randomNumber])
    }

  };
  // Generting random password and displaying in the text box
  password = password.slice(0, passwordLength)
  password = password.join("")
  document.querySelector("#password").innerHTML = password
  
}

