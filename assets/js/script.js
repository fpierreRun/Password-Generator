



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page 

// Assignment code here
var generatePassword = function() {
  // WHEN prompted for password criteria
// THEN I select which criteria to include in the password
  window.alert("Select Your Password Criteria");
  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var lengthPwPrompt = window.prompt("How many charatcers do you want in your password? (Choose a length of at least 8 characters and no more than 128 characters)");

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var lowercaseConfirm = window.confirm ("Do you want to include lowercase? Click ok to confirm");
var uppercaseConfirm = window.confirm ("Do you want to include uppercase? Click ok to confirm" );
var numericConfirm = window.confirm ("Do you want to include numeric? Click ok to confirm");
var specialCharactersConfirm = window.confirm ("Do you want to include special characters? Click ok to confirm");
console.log ("specialCharactersConfirm");

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
}

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Have prompts to create criteria for passowrd

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
