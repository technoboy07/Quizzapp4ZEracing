const questions = [
    {
        question: "Who won the 2021 Formula 1 Drivers World Championship?",
        answers: [
            {text: "Max Verstappen", correct: true},
            {text: "Fernando Alonso", correct: false},
            {text: "Lando Norris", correct: false},
            {text: "Lewis Hamilton", correct: false},


        ]
    },
    {
        question: "Who is Called as the Schumachers nightmare?",
        answers: [
            {text: "Mika Hakkinen", correct: false},
            {text: "Robert kubica", correct: false},
            {text: "Fernando Alonso", correct: false},
            {text: "Kimi Raikkonen", correct: true},  
        ]
    },
    {
        question: "Who Won the Monaco Grand prix 5 times?",
        answers: [
            {text: "Jackie Stewart", correct: false},
            {text: "Graham Hill", correct: true},
            {text: "Emerson Fittipaldi", correct: false},
            {text: "Niki lauda", correct: false},  
        ]
    },
    {
        question: "What Team did Narain Karthikeyan drive for in Formula 1",
        answers: [
            {text: "Force India F1 racing team", correct:false},
            {text: "HRT Formula 1 racing", correct: true},
            {text: "Lotus Renault formula 1 team", correct: false},
            {text: "Sauber formula 1 racing team", correct: false},  
        ]
    },
    {
        question: "Who won the 2023 24 heures du Mans?",
        answers: [
            {text: "Nascar stock car team", correct: false},
            {text: "The Porche", correct: false},
            {text: "Ferrari", correct: true},
            {text: "Caddillac", correct: false},  
        ]
    },
    {
        question: "Find the Three time world champion among the following:",
        answers: [
            {text: "Nico rosberg", correct: false},
            {text: "Fernando Alonso", correct: false},
            {text: "Sebastian Vettel", correct: false},
            {text: "Ayrton Senna", correct: true},  
        ]
    },
    {
        question: "What is the Netflix docu series on formula 1 called?",
        answers: [
            {text: "Weekend of a champion", correct: false},
            {text: "Schumacher", correct: false},
            {text: "Drive to survive", correct: true},
            {text: "Rush 2013", correct: false},  
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
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
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
