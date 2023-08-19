const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// create array for passwords
let passwordOne = [];
let passwordTwo = [];
// grab html, connect javascript
let resultOne = document.querySelector("#result-one")
let resultTwo = document.querySelector("#result-two")

// generate passwords

function generatePasswordOne(){
    if (passwordOne.length <= 15){
        for (let i = 0; i < 16; i++){
            let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
            passwordOne.push(randomCharacter);
        } 
    } else {
        return passwordOne;
    }
    resultOne.textContent = passwordOne.join("")
}

function generatePasswordTwo(){
    if (passwordTwo.length <= 15){
        for (let i = 0; i < 16; i++){
            let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
            passwordTwo.push(randomCharacter);
        } 
    } else {
        return passwordTwo;
    }
    resultTwo.textContent = passwordTwo.join("")
}

console.log(characters.length);

// click event
function populatePasswords(){
    generatePasswordOne();
    generatePasswordTwo();
}