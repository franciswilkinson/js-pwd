// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var arr = [];

var options = [{
  sc: 0,
  lc: 0,
  uc: 0,
  n: 0,
}];

var num = 0;
var pwd = [];

// Function to prompt user for password options
function getPasswordOptions() {
  //Clears arrays each time function is called.
  arr = [];
  pwd = [];
  num = prompt("How many characters would you like your password to contain?");
  if (num >= 8 && num <= 128) {

    options.n = confirm("Click OK to confirm including numeric characters");
    if (options.n === true){
      arr = arr.concat(numericCharacters);
      }
    options.lc = confirm("Click OK to confirm including lowercase characters");
    if (options.lc === true){
      arr = arr.concat(lowerCasedCharacters);
      }
    options.uc = confirm("Click OK to confirm including uppercase characters");
    if (options.uc === true){
      arr = arr.concat(upperCasedCharacters);
      }
    options.sc = confirm("Click OK to confirm including special characters");
    if (options.sc === true){
      arr = arr.concat(specialCharacters);
      }
    

  } else {
    alert("Password length must be at least 8 characters and less than 128 characters.");
    writePassword();
  }

  return arr;
}

// Function for getting a random element from an array
function getRandom() {
   
   return arr[Math.floor(Math.random() * arr.length)];
   
}


// Function to generate password with user input
function generatePassword() {
  
for (var i=0; i<num; i++){
  pwd[i] = getRandom();
}

return pwd.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
