const questions = [
  {
    question: 'Qual é a capital da França?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'Londres', correct: false },
      { text: 'Berlim', correct: false },
      { text: 'Madrid', correct: false },
    ],
  },
  {
    question: 'Qual é a capital da Alemanha?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'Londres', correct: false },
      { text: 'Berlim', correct: true },
      { text: 'Madrid', correct: false },
    ],
  },
  {
    question: 'Qual é a capital da Espanha?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'Londres', correct: false },
      { text: 'Berlim', correct: false },
      { text: 'Madrid', correct: true },
    ],
  },
  {
    question: 'Qual é a capital da Inglaterra?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'Londres', correct: true },
      { text: 'Berlim', correct: false },
      { text: 'Madrid', correct: false },
    ],
  },
];

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const quizContainer = document.getElementById('quizContainer');
    const nextButton = document.getElementById('nextButton');
    const resultContainer = document.getElementById('resultContainer');
    const correctCountElement = document.getElementById('correctCount');
    const wrongCountElement = document.getElementById('wrongCount');
    const usernameInput = document.getElementById('username');

    let currentQuestion = 1;
    let correctCount = 0;
    let wrongCount = 0;
    let totalQuestions = questions.length;
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      quizContainer.style.display = 'block';
      resultContainer.getElementsByTagName('h2')[0].textContent = `Olá ${usernameInput.value}!`;
      
      showQuestion(1);
    });
  
    nextButton.addEventListener('click', function () {
      const answer = document.querySelectorAll('#quizContainer input[type="radio"]:checked');
      if (answer.length === 0) {
        alert('Selecione uma resposta');
        return;
      }
      const selectedAnswer = answer[0].value === 'true';
      if (selectedAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }

      showQuestion(currentQuestion + 1);
    });
  
    function createQuestion(questionNumber) {
      const questionElement = document.querySelector('#quizContainer p');

      let pergunta = questions[questionNumber - 1];
      questionElement.textContent = pergunta.question;

      const answerOptions = document.querySelectorAll('#quizContainer input[type="radio"]');
      for (let i = 0; i < answerOptions.length; i++) {
        answerOptions[i].value = pergunta.answers[i].correct;
        answerOptions[i].nextSibling.textContent = pergunta.answers[i].text;
        answerOptions[i].checked = false;
      }
    }
  
    function showQuestion(questionNumber) {

      if (questionNumber > totalQuestions) {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        correctCountElement.textContent = correctCount;
        wrongCountElement.textContent = wrongCount;
      } else {
        currentQuestion = questionNumber;
        const title = document.querySelector('#quizContainer h2');
        title.textContent = `Pergunta ${questionNumber} de ${totalQuestions}`;

        createQuestion(questionNumber);
      }
    }
    
    showQuestion(1);


  });
  