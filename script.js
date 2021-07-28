(function()}
// functions
function myQuiz(){ 
  const output = [];

  quizQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //answers
      const answers = [];

      // each answer
      for(number in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${number}">
            ${number} :
            ${currentQuestion.answers[number]}
          </label>`
        );
      }

      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');

}



function quizResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;


  myQuestions.forEach( (currentQuestion, questionNumber) => {
  
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}


// running myQuiz function first to display the quiz on page immediately

myQuiz();

// show results after pressing submit button:

submitButton.addEventListener('click', quizResults);


// quiz questions (SOURCED FROM W3schools.com):



//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit')
const quizQuestions = [ 

//Q1
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
       1: "<script>",
       2: "<javascript>",
       3: "<js>",
       4: "<scripting>"
    },
    // answer section
    correctAnswer: 1
  },

//Q2

  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element: NEED TO ADD THE EXAMPLE BACK",
    answer: {
       1: "REPLACE",
       2: "REPLACE",
       3: "REPLACE",
       4: "REPLACE"
    },
    // answer section
    correctAnswer: "2"
  },  
  
//Q3  
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: {
      1: "Both the <head> section and the <body> section are correct",
      2: "The <head> section",
      3: "The <body> section"
    },
    // answer section
    correctAnswer: "1"
  },  
//Q4  
  {
    question: "REPLACE",
    answer: {
      1: "REPLACE",
      2: "REPLACE",
      3: "REPLACE"
    },
    // answer section
    correctAnswer: "3"
  },

//Q5  
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answer: {
      1: "True",
      2: "False"
    },
    // answer section
    correctAnswer: "2"
  },

//Q6  
  {
    question: "REPLACE",
    answer: {
      1: "REPLACE",
      2: "REPLACE",
      3: "REPLACE",
      4: "REPLACE"
    },
    // answer section
    correctAnswer: "4"
  },

//Q7 
{
  question: "How do you create a function in JavaScript?",
  answer: {
    1: "function = myFunction()",
    2: "function myFunction()",
    3: "function:myFunction()"
  },
  // answer section
  correctAnswer: "2"
},  

//Q8
{
  question: "REPLACE",
  answer: {
    1: "call myFunction()",
    2: "call function myFunction()",
    3: "myFunction()"
  },
  // answer section
  correctAnswer: "3"
},

//Q9  
{
  question: "How to write an IF statement in JavaScript?",
  answer: {
    1: "if i = 5",
    2: "if i = 5 then",
    3: "if (i == 5)",
    4: "if i == 5 then"
  },
  // answer section
  correctAnswer: "3"
},

//Q10
{
  question: "REPLACE",
  answer: {
    1: "if i =! 5 then",
    2: "if i <> 5",
    3: "if (i <> 5)",
    4: "if (i != 5)"
  },
  // answer section
  correctAnswer: "1"
}
];
      }
