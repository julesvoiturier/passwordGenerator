
let passwordLength = document.querySelectorAll("input")[0]

let includeUppercase = document.querySelectorAll("input")[1]
let includeLowercase = document.querySelectorAll("input")[2]
let includeNumbers = document.querySelectorAll("input")[3]
let includeSymbols = document.querySelectorAll("input")[4]

let clipboardCopy = document.querySelectorAll("button")[0]
let generatePassword = document.querySelectorAll("button")[1]

let passwordDisplay = document.querySelector("#password")


// ----------------------------------------------------------------
   
let allLetters = "abcdefghijklmnopqrstuvwxyz";
let letter

let allNumbers = "0123456789" 
let number

let allSymbols = "&@#$£?!"
let symbol

let password = []

let currentval = 0

// -----------------------------------------------------------------

let addLetter = () => {
    
    letter = allLetters[Math.floor(Math.random() * allLetters.length)];

    if (includeUppercase.checked == true && includeLowercase.checked == true) {
        upperLower =  Math.floor(Math.random() * 2)
        switch (upperLower) {
            case 0:
                password.push(letter.toUpperCase())
                break;
            case 1:
                password.push(letter)
                break;
        }
    } else if (includeLowercase.checked == true && includeUppercase.checked == false) {
        password.push(letter)
    } else if (includeLowercase.checked == false && includeUppercase.checked == true) {
        password.push(letter.toUpperCase())
    }
}

let addNumber = () => {
    if (includeNumbers.checked == true) {
        number = allNumbers[Math.floor(Math.random() * allNumbers.length)];
        password.push(number)
    }
}

let addSymbol = () => {
    if (includeSymbols.checked == true) {
        symbol = allSymbols[Math.floor(Math.random() * allSymbols.length)];
        password.push(symbol)
    }
}

let generate = () => {

    currentval = passwordLength.value

    while (password.length < currentval) {
        let randomCharacter =  Math.floor(Math.random() * 3)

        switch (randomCharacter) {
            case 0:
                addLetter()
                break;
            case 1:
                addNumber()
                break;
            case 2:
                addSymbol()
                break;
        }
    }
}

//------------------------------------------------------------------------

generatePassword.addEventListener("click", () => {
    password = []
    generate()
    passwordDisplay.innerHTML = password.join("")
})

clipboardCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.innerHTML);
})

passwordLength.addEventListener("keydown", function(e) {
    e.preventDefault();
 });