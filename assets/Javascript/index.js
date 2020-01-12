var charSelect = [];
var passwordLength = 0;
var randomChar = 0;
var lowerConfirm;
var upperConfirm;
var symbConfirm;
var numConfirm;
var pass = "";


function generatePass() {
    passLength();
    style();
};
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symb = ["`","`","!", "@", "#", "$", "%","^","&","*","(",")","-","_","=","+","|",";",":","'","?","/",".",",","<",">"];
    
    function passLength() {
        passwordLength = prompt ("How many passwords characters would you like? "+" you can choose between 8 to 128 characters");
    
        console.log(typeof passwordLength);
        numLength = parseInt(passwordLength);
        passwordLength = numLength;
    
        while ((passwordLength <= 7 || passwordLength >= 129) || (isNaN(passwordLength)) || (typeof passwordLength === "string")) {
            alert("Password must be between 8 and 128 characters.");
            passwordLength = prompt("How many passwords characters would you like? " + " You can choose between 8 to 128 characters");
    
            console.log(typeof passwordLength);
            numLength = parseInt(passwordLength);
            passwordLength = numLength;
        };
        console.log(typeof passwordLength);
        console.log(passwordLength);
    };
    
    function style() {
        const upperConfirm = confirm('Would you like uppercase letters?');
        console.log(upperConfirm);
        const lowerConfirm = confirm('Would you like lowercase letters?');
        console.log(lowerConfirm);
        const symbConfirm = confirm('Would you like special charaters?');
        console.log(symbConfirm);
        const numConfirm = confirm('Would you like numbers?');
        console.log(numConfirm);
    
        if (confirm) {
            characters = charSelect.concat(lowerLetters, upperLetters, num, symb);
            charSelect = characters;
            console.log(charSelect);
        };
    
        if ((symbConfirm === false) && (numConfirm === false) && (lowerConfirm === false) && (upperConfirm === false)) {
            alert("You need to select at least one character type to continue.");
        };
    
        for (let i = 0; i < passwordLength; i++) {
            randomChar = Math.floor(Math.random() * charSelect.length);
            pass += charSelect[randomChar];
        };
    
        console.log(pass);
        document.getElementById("password").value = pass;
    
    };
    
    function copy() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Password Copied!")
    };
