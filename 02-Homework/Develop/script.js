// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('Password: ' + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var love = false;
  var content = {
    length: 0,
    upper: true,
    lower: true,
    numeric: true,
    specialChar: true,
  }

  //Prompting user for password length
  while (love === false) {
    content.length = prompt("Please select a password length between 8 and 128 characters.");

    if (content.length > 7 && content.length < 129) {
      love = true;
    }
    else if (content.length === null){
      return;
    }
    else {
      alert('try again dumb ass.');
    }

  }

  //Prompting user if uppercase letters
  var upper = prompt('Would you like to include uppercase letters?');
  if (upper === 'yes' || upper === 'Yes') {
    content.upper = true;
  }
  else {
    content.upper = false;
  }

  //Prompting user if lowercase letters
  var lower = prompt('Would you like to include lowercase letters?');
  if (lower === 'yes' || lower === 'Yes') {
    content.lower = true;
  }
  else {
    content.lower = false;
  }

//Prompting user if numeric
var numeric = prompt('Would you like to include numbers?');
  if (numeric === 'yes' || numeric === 'Yes') {
    content.numeric = true;
  }
  else {
    content.numeric = false;
  }

  //Prompting user if special characters
  var specialChar = prompt('Would you like to include special characters?');
  if (specialChar === 'yes' || specialChar === 'Yes') {
    content.specialChar = true;
  }
  else {
    content.specialChar = false;
  }

//creating array of possible password options
  var characters = [];
  if (content.upper === true){
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (content.lower === true){
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (content.numeric === true){
    characters += '1234567890';
  }
  if (content.specialChar === true){
    characters += '!@#$%^&*?()_+';
  }
  //generate random password 
  var final = '';
  for (var i = 0; i < content.length; i++){
    final += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(content);
  console.log('options: ' + characters);
  console.log('generated password: ' + final);
  return final;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


