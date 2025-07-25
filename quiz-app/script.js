const questions = [

        {
            question: "Which is the smallest country in the world?",
            answers: [
              { text: "Vatican City", correct: true},
              { text: "Bhutan", correct: false},
              { text: "Nepal", correct: false},
              { text: "Shri Lanka", correct: false},
            ]
          },
          {
            question: "Which mountain range is home to the world's highest peak, Mount Everest?",
            answers: [
              { text: "The Andes", correct: false},
              { text: "The Rocky Mountains", correct: false},
              { text: "The Himalayas", correct: true},
              { text: "The Alps", correct: false},
            ]
          },
          {
            question: "What is the largest hot desert in the world??",
            answers: [
              { text: "Gobi Desert", correct: false},
              { text: "Sahara Desert", correct: true},
              { text: "Arabian Desert", correct: false},
              { text: "Kalahari Desert", correct: false},
            ]
          }
]

const questionElement = document.getElementById("question")
const answerButton = document.querySelector(".answer-buttons")
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton(); 
    }
    else{
        startQuiz();
    }
})

startQuiz();