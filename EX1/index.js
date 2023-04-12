/**
 * Creates an alert when the user enters for the first time
 * telling him how many guesses he have for each difficulty 
 */
const gameInfo = () => {
    let message = "Please choose a game difficulty before starting to play!\n<strong>EASY : </strong>10 guesses\n<strong>NORMAL : </strong>5 guesses\n<strong>HARD : </strong>3 guesses\n";
    let tempElement = document.createElement("div");
    tempElement.innerHTML = message;
    alert(tempElement.innerText);
}
gameInfo();

//let because we will reassign to it another value later
const randomNumber = parseInt(Math.random() * 10);
console.log(randomNumber);
let guessesLimit = 5;
const selectedElement = document.querySelector('select');
const startGameButton = document.querySelector("#start-game-btn");

//here we used anonymous func since we will use it only one time
selectedElement.addEventListener("change", function() {
    const difficulty = parseInt(selectedElement.value);
    console.log(selectedElement.value)   ;
    switch (difficulty) {
        case 1:
            guessesLimit = 10;
            break;
        case 2:
            guessesLimit = 5;
            break;
        case 3:
            guessesLimit = 3;
            break;
        default:
            guessesLimit = 5;
            break;
    }
    console.log(`Number of guesses: ${guessesLimit}`); 

    //here we used backticks since we can't use "" and $ at the same time
  });
  console.log(`Number of guesses: ${guessesLimit}`); 
  
let guessCount = 1;

const guesses = document.querySelector(".guesses");
const finalResult = document.querySelector(".finalResult");
const lowOrHi = document.querySelector(".lowOrHigh");

startGameButton.addEventListener("click", testGuess);

function testGuess(){
    const userGuess = prompt("Please enter a number between 1 and 10:");
    if (guessCount == 1) {
        guesses.innerHTML = 'Previous guesses: ';
    }

    guesses.innerHTML += userGuess + ' ';

    if (userGuess == randomNumber) {
        finalResult.textContent = 'Congratulations! You got it right!';
        finalResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount > guessesLimit-1) {
        finalResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
        //console.log("game over");
      } else {
        finalResult.textContent = 'Wrong!';
        finalResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          alert("last guess was too low!");
        }else if(userGuess > randomNumber) {
          alert("last guess was too high!");
        }
        guessCount++;
        testGuess();
      }

      function setGameOver() {
        startGameButton.disabled = true;
        const resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.append(resetButton);
        resetButton.addEventListener("click", function() {
          guessCount = 1;
          startGameButton.disabled = false;
          resetButton.parentNode.removeChild(resetButton);
          guesses.textContent = "";
          finalResult.textContent = "";
          lowOrHi.textContent = "";
          randomNumber = Math.floor(Math.random() * 10) + 1;
        });
      }
}