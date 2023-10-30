var countdown = document.querySelector(".Timer");
var startButton = document.querySelector(".startButton");
var viewScores = document.querySelector(".highScore");
var startScreenVisibility = document.querySelector("#startScreenVisbility");
var quizQuestionsDisplay = document.querySelector("#quizQuestionsDisplay");
var quizQuestion = document.querySelector("#quizQuestion");
var quizChoices = document.querySelector("#quizChoices");
var questionNumber = 0;

//List of questions and answers -- Array within an array

const listOfQuestions = [
  {
    question:
      "Which one would you typical to use to store the changes you are making for styling purposes?",
    answers: ["HTML", "CSS", "Jquery", "JavaScript"],
    correctAnswer: "CSS",
  },
  {
    question: "What type should I use if I'm using text?",
    answers: ["String", "Number", "Integer", "Decimal"],
    correctAnswer: "String",
  },
];
//function for timer 
function startTimer() {
  var timeRemaining = 50;

  var timeSet = setInterval(function () {
    if (timeRemaining >= 1) {
      countdown.textContent = timeRemaining;
      timeRemaining--;
    } else {
      countdown.textContent = timeRemaining;
      clearInterval(timeSet);
    }
  }, 1000);
}

//button to start the timer
startButton.addEventListener("click", function () {
  startTimer();
  startScreenVisibility.style.display = "none";
  quizQuestionsDisplay.style.display = "";
  displayQuestions();
});

//questions displayed
function displayQuestions() {
  const output = [];

  quizQuestion.textContent = listOfQuestions[questionNumber].question;

  for (let x in listOfQuestions[questionNumber].answers) {
    const button = document.createElement("button");
    button.innerText = listOfQuestions[questionNumber].answers[x];
    quizChoices.appendChild(button);
  }
}

function checkAnswer() {
  let word = listOfQuestions[questionNumber].correctAnswer;
  console.log("Correct Answer " + word);
  console.log(listOfQuestions[questionNumber].correctAnswer);
  console.log($(this).children("button"));
  if (listOfQuestions[questionNumber].correctAnswer === word) {
    console.log("Match Match");
  }
}
quizChoices.addEventListener("click", checkAnswer);

viewScores.addEventListener("click", function () {});

function hidepage() {
  quizQuestionsDisplay.style.display = "none";
}
hidepage();
