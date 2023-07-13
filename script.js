var countdown = document.querySelector(".Timer");
var startButton = document.querySelector(".startButton");
var viewScores = document.querySelector(".highScore");
var startScreenVisibility = document.querySelector("#startScreenVisbility");
var quizQuestionsDisplay = document.querySelector("#quizQuestionsDisplay");
var quizQuestion = document.querySelector("#quizQuestion");
var quizChoices = document.querySelector("#quizChoices");
var questionNumber = 0;

const listOfQuestions = [
  {
    question:
      "Which one would you typical to use to store the changes you are making for styling purposes?",
    answers: {
      A: "HTML",
      B: "CSS",
      C: "Jquery",
      D: "JavaScript",
    },
    correctAnswer: "CSS",
  },
  {
    question: "What type should I use if I'm using text?",
    answers: {
      A: "String",
      B: "Number",
      C: "Integer",
      D: "Decimal",
    },
    correctAnswer: "String",
  },
];

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

startButton.addEventListener("click", function () {
  startTimer();
  startScreenVisibility.style.display = "none";
  quizQuestionsDisplay.style.display = "";
  displayQuestions();
});

function displayQuestions() {
  const output = [];

  quizQuestion.textContent = listOfQuestions[questionNumber].question;

  for (let x in listOfQuestions[questionNumber].answers) {
    const button = document.createElement("button");
    button.innerText = listOfQuestions[questionNumber].answers[x];
    quizChoices.appendChild(button);
  }
}

quizChoices.addEventListener("click", function (answers) {
  let word = answers.srcElement.innerText;
  console.log(word);
  console.log(listOfQuestions[questionNumber].correctAnswer);
  if (listOfQuestions[questionNumber].correctAnswer < answers.target) {
    console.log("cool");
  }
});

viewScores.addEventListener("click", function () {});

function hidepage() {
  quizQuestionsDisplay.style.display = "none";
}
hidepage();
