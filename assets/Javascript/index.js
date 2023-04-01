// Define arrays for each type of character
const uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "|",
  ";",
  ":",
  "'",
  "?",
  "/",
  ".",
  ",",
  "<",
  ">",
];

// Define variables for user input and generated password
let passwordLength;
let useUppercaseChars;
let useLowercaseChars;
let useNumericChars;
let useSpecialChars;
let generatedPassword = "";

// Prompt user for password criteria
function getPasswordCriteria() {
  passwordLength = parseInt(
    prompt(
      "How many characters would you like in your password? (Choose a number between 8 and 128)"
    )
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    getPasswordCriteria();
    return;
  }

  useUppercaseChars = confirm("Would you like to include uppercase letters?");
  useLowercaseChars = confirm("Would you like to include lowercase letters?");
  useNumericChars = confirm("Would you like to include numeric characters?");
  useSpecialChars = confirm("Would you like to include special characters?");

  if (
    !useUppercaseChars &&
    !useLowercaseChars &&
    !useNumericChars &&
    !useSpecialChars
  ) {
    alert("Please select at least one type of character.");
    getPasswordCriteria();
    return;
  }
}

// Generate password based on user input
function generatePassword() {
  getPasswordCriteria();

  let availableChars = [];
  if (useUppercaseChars) {
    availableChars = availableChars.concat(uppercaseChars);
  }
  if (useLowercaseChars) {
    availableChars = availableChars.concat(lowercaseChars);
  }
  if (useNumericChars) {
    availableChars = availableChars.concat(numericChars);
  }
  if (useSpecialChars) {
    availableChars = availableChars.concat(specialChars);
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }
}

// Display generated password on the page
function displayPassword() {
  const passwordElement = document.getElementById("password");
  passwordElement.value = generatedPassword;
}

// Copy generated password to clipboard
function copyPassword() {
  const passwordElement = document.getElementById("password");
  passwordElement.select();
  passwordElement.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard!");
  passwordElement.value = "";

}

function generate() {
  generatePassword();
  displayPassword();
}
