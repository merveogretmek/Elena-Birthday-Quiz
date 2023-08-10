function enableButton(questionNumber) {
  document.getElementById("next" + questionNumber).disabled = false;
}

function nextQuestion(questionNumber) {
  let currentQuestion = document.getElementById("q" + questionNumber);
  let nextQ = document.getElementById("q" + (questionNumber + 1));

  currentQuestion.style.display = "none"; // Hide current question

  // If there's a next question, show it. Otherwise, show the submit button.
  if (nextQ) {
    nextQ.style.display = "block";
  } else {
    document.getElementById("submitButton").style.display = "block";
  }
}

function submitQuiz() {
  let questions = document.getElementsByClassName("question");
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.display = "none";
  }
  document.getElementById("submitButton").style.display = "none";
  document.getElementById("birthdayMessage").style.display = "block";

  // Play the birthday sound
  document.getElementById("birthdaySound").play();
}
