// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask the user for length 
  // (Minimum character of 8, max of 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password greater than 8 characters and less than 128 characters");
    return "";
  }
  
  // Ask the user for which characters to include 
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");

  // Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types.\nPlease include at least one type of character.");
    return "";
  }

  // Generate a random password
  let passwordCharacters = [];
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
 // TODO Other character types 

  if (includeLowercase)
 passwordCharacters = passwordCharacters.concat(lowerCase.split("")); {
  }

  if (includeUppercase)
    passwordCharacters = passwordCharacters.concat(upperCase.split("")); {
  }

  if (includeNumbers)
  passwordCharacters = passwordCharacters.concat(numbers.split("")); {
  } 

  if (includeSpecialCharacters)
    passwordCharacters = passwordCharacters.concat(specialCharacters.split("")); {
  }

  let results = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
  }

  // Return generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
