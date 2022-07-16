


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//global referenced arrays for criteria
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharactersArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbersArray = "0123456789".split("");

//empyt password array
var passwordCreated = [];

//Have prompts to create criteria for password
var generatePassword = function() {

    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    alert("Select Your Password Criteria");

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var lengthPrompt = window.prompt("How many charatcers do you want in your password? (Choose a length of at least 8 characters and no more than 128 characters)");
  
    lengthPrompt = parseInt(lengthPrompt);
      console.log(lengthPrompt);

    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Characters must be between 8-128");
      return generatePassword();
    }


    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var lowercaseConfirm = window.confirm ("Do you want to include lowercase? Click ok to confirm");
        
    if (lowercaseConfirm === true) {
          passwordCreated = passwordCreated.concat(lowercaseArray);
          console.log(passwordCreated)
        };

    
    var uppercaseConfirm = window.confirm ("Do you want to include uppercase? Click ok to confirm" );

    if (uppercaseConfirm === true) {
      passwordCreated = passwordCreated.concat(uppercaseArray);
      console.log(passwordCreated)
    };
  


    var numericConfirm = window.confirm ("Do you want to include numeric? Click ok to confirm");

    if (numericConfirm === true) {
      passwordCreated = passwordCreated.concat(numbersArray);
      console.log(passwordCreated)
    };
      
    var specialCharactersConfirm = window.confirm ("Do you want to include special characters? Click ok to confirm");
    
    if (specialCharactersConfirm === true) {
      passwordCreated = passwordCreated.concat(specialCharactersArray);
      console.log(passwordCreated)
    };
  
    console.log ("specialCharactersConfirm");

     // If statement to check whether user confirmed at least one of either uppercase, lowercase, special characters, or numbers to include in the password. 
     if (numericConfirm === false && specialCharactersConfirm === false && uppercaseConfirm === false && lowercaseConfirm === false) {
      alert(`You did not pick at least one of the criteria (uppercase, lowercase, special characters, or numbers) to be included in your password. Please try again.`);
      return passwordCreated();
    }

    else {
      var generatePassword = "";
      for(var 1 = 0; i < numericConfirm; i++) {
          var password = Math.floor(Math.random() * passwordCreated.length);
          generatePassword += passwordCreated[password];
      }
    }
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria

    console.log(generatePassword);
    return generatePassword;


    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
  var passwordText = document.querySelector("#password");

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
