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

// copy to clipboard
let copyBtnOne = document.querySelector("#copy-pw-one")
let copyBtnTwo = document.querySelector("#copy-pw-two")

const copyContentOne = async () => {
    try {
      await navigator.clipboard.writeText(passwordOne);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    copyBtnOne.textContent = "Copied!"
  }

const copyContentTwo = async () => {
    try {
      await navigator.clipboard.writeText(passwordTwo);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    copyBtnTwo.textContent = "Copied!"
  }

  // dark mode vs light mode
      // [default is dark mode]
    let body = document.querySelector("body");
    let heading = document.querySelector(".heading")
    let modeBtn = document.querySelector("#mode-toggle")
    let statement = document.querySelector(".site-statement")
    let resultBoxOne = document.querySelector("#result-one p")
    let resultBoxTwo = document.querySelector("#result-two p")
    let midLine = document.querySelector(".line")

  function switchMode() {
    if (body.classList.contains("lightModeBody")){
      body.classList.remove("lightModeBody")
    } else {
      body.classList.add("lightModeBody");
    }

    if (heading.classList.contains("lightModeHeading")){
      heading.classList.remove("lightModeHeading")
    } else {
      heading.classList.add("lightModeHeading");
    }

    if (modeBtn.classList.contains("lightModeButton")){
      modeBtn.classList.remove("lightModeButton")
      modeBtn.textContent = "Light Mode"
    } else {
      modeBtn.classList.add("lightModeButton");
      modeBtn.textContent = "Dark Mode"
    }

    if (statement.classList.contains("lightModeStatement")){
      statement.classList.remove("lightModeStatement")
    } else {
      statement.classList.add("lightModeStatement");
    }

    if (resultBoxOne.classList.contains("lightModeResult")){
      resultBoxOne.classList.remove("lightModeResult")
      resultBoxTwo.classList.remove("lightModeResult")
    } else {
      resultBoxOne.classList.add("lightModeResult");
      resultBoxTwo.classList.add("lightModeResult");
    }

    if (midLine.classList.contains("lightModeLine")){
      midLine.classList.remove("lightModeLine")
    } else {
      midLine.classList.add("lightModeLine");
    }


  }