var questions = [
    {
        number: 1,
        question: "Which of the following is a loop structure in JavaScript?",
        answer: "For Loop",
        options: [
            "For Loop",
            "Quick Loop",
            "Sample Loop",
            "Circle Loop"
        ]
    },
    {
        number: 2,
        question: "Which is NOT a type of pop up box in Javascript?",
        answer: "Greeting",
        options:[
            "Alert",
            "Prompt",
            "Greeting",
            "Confirm"
        ]
    },
    {
        number: 3,
        question: "Javascript was developed by which company?",
        answer: "Netscape",
        options:[ 
            "Microsoft",
            "Netscape",
            "Apple",
            "McDonalds"
        ]
    },
    {
        number: 4,
        question: "JavaScript is a case sensitice language.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
];

var timerElement = document.querySelector(".timer-display");
var timer;
var timerCount;
var startButton = document.getElementById('start-button');
var startScreen = document.getElementById('start-screen');
var questionSection = document.getElementById('questions-page');


startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hide')
    timerCount = 100;
    startButton.disabled = true;
    //renderBlanks()
    startTimer()
    questionSection.classList.remove('hide')
    //nextQuestion()
  }

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }






