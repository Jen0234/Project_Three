// Assignment code here
number = [0,1, 2, 3, 4, 5, 6, 7, 8 , 9];
lowerCase = ['qwertyuiopasdfghjklzxcvbnm'];
upperCase = ['QWERTYUIOPASDFGHJKLZXCVBNM'];
specialChar= ['@#$%^&*()_+{}[]~`-=|\\:;"<>./?'];
PasswordLengthMin = 8;
PasswordLengthMax = 20;

pass = [number + lowerCase + upperCase + specialChar];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < PasswordLengthMin || passwordLength > PasswordLengthMax) {
      alert("Password must be between " + PasswordLengthMin + " and " + PasswordLengthMax + " characters");
      return generatePassword();
    }
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * pass.length);
      password += pass[randomNumber][Math.floor(Math.random() * pass[randomNumber].length)];
    }
    return password;
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

