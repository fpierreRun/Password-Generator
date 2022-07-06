


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//empyt password array



//Have prompts to create criteria for password
var generatePassword = function() {
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  window.alert("Select Your Password Criteria");
  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var lengthPrompt = window.prompt("How many charatcers do you want in your password? (Choose a length of at least 8 characters and no more than 128 characters)");
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Characters must be between 8-128");
    return generatePassword();
}


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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
