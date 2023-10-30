var countdown = document.querySelector(".Timer");
var timeRemaining = 50;
var startButton = document.querySelector(".startButton");
// var viewScores = document.querySelector(".highScore");
var startScreenVisibility = document.querySelector("#startScreenVisbility");
var quizQuestionsDisplay = document.querySelector("#quizQuestionsDisplay");
var quizQuestion = document.querySelector("#quizQuestion");
var quizChoices = document.querySelector("#quizChoices");
var nextButton = document.querySelector("#next");
var questionNumber = 0;
var runningScore = document.querySelector(".runningScore");
var scoreValue = 0;
var mainFinalScore = document.querySelector("#mainFinalScore");
var scoring = document.querySelector("#Scoring");
var initals = document.querySelector("#initals");
//Buttons for Options:
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


//List of questions and answers -- Array within an array

const listOfQuestions = [
  {
    question:
      "Which one would you typical to use to store the changes you are making for styling purposes?",
    answers: [
      {text: "HTML", correct: false},
      {text: "CSS", correct: true},
      {text: "Jquery", correct: false},
      {text: "JavaScript", correct: false},
    ],
  },
  {
    question: "What type should I use if I'm using text?",
    answers: [
      {text: "String", correct: true},
      {text: "Number", correct: false},
      {text: "Integer", correct: false},
      {text: "Decimal", correct: false},
    ],
  },
  {
    question: "A Syntax Error is?",
    answers: [
      {text: "An error you will never find", correct: false},
      {text: "An error you find at the end when the program gives out a wrong value due to the logic error", correct: false},
      {text: "An error caused by language rules being broken", correct: true},
      {text: "An error due to user error", correct: false},
    ],
  },
  {
    question: "What does FIFO stand for?",
    answers: [
      {text: "First In Few Out", correct: false},
      {text: "Few In Few out", correct: false},
      {text: "First In First Out", correct: true},
      {text: "Few In First Out", correct: false},
    ],
  },
  {
    question: "A memory location that holds a single letter or number is called ______",
    answers: [
      {text: "Double", correct: false},
      {text: "Int", correct: false},
      {text: "Char", correct: true},
      {text: "Word", correct: false},
    ],
  },
  {
    question: "A short sections of code written to complete a task",
    answers: [
      {text: "Buffer", correct: false},
      {text: "Array", correct: false},
      {text: "Function", correct: true},
      {text: "Loop", correct: false},
    ],
  },
  {
    question: "A memory location that holds a single letter or number is called ______",
    answers: [
      {text: "Double", correct: false},
      {text: "Int", correct: false},
      {text: "Char", correct: true},
      {text: "Word", correct: false},
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      {text: "HyperText Markup Language", correct: true},
      {text: "HyperDrive", correct: false},
      {text: "Hyper Technological Markup Language", correct: false},
      {text: "Hotel Mail", correct: false},
    ],
  }
];

//button to start the timer and Quiz
startButton.addEventListener("click", function () {
  startTimer();
  // Hide main screen
  startScreenVisibility.style.display = "none";
  // Display Quiz Question Section
  quizQuestionsDisplay.style.display = "";
  //Display Questions
  displayQuestions();
  //Display Answers
  displayAnswers();
  //Update Question Number
  UpdateQuestionNumber();
});

//function for timer 
function startTimer() {
 

  var timeSet = setInterval(function () {
    if (timeRemaining >= 1) {
      countdown.textContent = timeRemaining;
      timeRemaining--;
    } else {
      countdown.textContent = timeRemaining;
      clearInterval(timeSet);
      nextButton.style.display = "none";
      finalScore();
    }
  }, 1000);
}

//Function to reduce timer - From user perspective, lose 5 seconds
function decreaseTimer() {
  timeRemaining = timeRemaining - 4;
}

//Display Questions Function
function displayQuestions() {
  quizQuestion.textContent = listOfQuestions[questionNumber].question;
}

//Display Answers Function 
function displayAnswers() {
  option1.innerText = listOfQuestions[questionNumber].answers[0].text;
  option1.value = listOfQuestions[questionNumber].answers[0].correct; 
  option2.innerText = listOfQuestions[questionNumber].answers[1].text;
  option2.value = listOfQuestions[questionNumber].answers[1].correct; 
  option3.innerText = listOfQuestions[questionNumber].answers[2].text;
  option3.value = listOfQuestions[questionNumber].answers[2].correct; 
  option4.innerText = listOfQuestions[questionNumber].answers[3].text;
  option4.value = listOfQuestions[questionNumber].answers[3].correct; 


  // for (let x in listOfQuestions[questionNumber].answers) {
  //   const button = document.createElement("button");
  //   button.innerText = listOfQuestions[questionNumber].answers[x].text;
  //   quizChoices.appendChild(button);
  // }
}

function UpdateQuestionNumber() {
  questionNumber++;
  console.log(questionNumber);
}
//Checks answer when use click on a button 
function checkAnswer(e) {
  const selectedButton = e.target;
  console.log(selectedButton);
  console.log(selectedButton.value)
  if (selectedButton.value === "true"){
    //update background color
    selectedButton.style.background = "lightgreen";
    nextButton.style.display = "block";
  } else {
    //update background color
    selectedButton.style.background = "lightcoral";
    decreaseTimer();
  }
  
}

quizChoices.addEventListener("click", checkAnswer);

//Initiates when user advances to next question: 
function nextQuestion() {
  option1.style.background = "white";
  option2.style.background = "white";
  option3.style.background = "white";
  option4.style.background = "white";
  quizChoices.style.background = "rgb(18, 84, 145)";
  if (questionNumber < listOfQuestions.length)
  {
    displayQuestions();
    displayAnswers();
    UpdateQuestionNumber();
    increaseScore();
    nextButton.style.display = "none";
  }
  else{
    nextButton.style.display = "none";
    finalScore();
  }
}

function increaseScore(){
  scoreValue = scoreValue + 10;
  console.log(scoreValue);
  runningScore.textContent = scoreValue;
}

function finalScore() {
  quizQuestion.textContent = "The End - Thanks for taking the Quiz :)";
  mainFinalScore.style.display = "block";
  quizChoices.style.display = "none";
  
}

nextButton.addEventListener("click", nextQuestion);

//hides page for initial startup
function hidepage() {
  quizQuestionsDisplay.style.display = "none";
  mainFinalScore.style.display = "none";
}

//Thanks for submitting
scoring.addEventListener("click", thanks)

function thanks(){
  mainFinalScore.style.display = "none";
  console.log(initals.value);
  quizQuestion.textContent = `Thanks for playing, ${initals.value}!!`;
}

//Need view scores functionality 
// viewScores.addEventListener("click", function () {});

hidepage();
