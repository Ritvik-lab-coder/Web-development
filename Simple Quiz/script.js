const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            {
                text: "largest railway station",
                correct: true
            },
            {
                text: "highest railway station",
                correct: false
            },
            {
                text: "longest railway station",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "Entomology is the science that studies",
        answers: [
            {
                text: "Behavior of human beings",
                correct: false
            },
            {
                text: "Insects",
                correct: true
            },
            {
                text: "The origin and history of technical and scientific terms",
                correct: false
            },
            {
                text: "The formation of rocks",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        answers: [
            {
                text: "Asia",
                correct: false
            },
            {
                text: "Africa",
                correct: true
            },
            {
                text: "Europe",
                correct: false
            },
            {
                text: "Australia",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "The Parliament of India cannot be regarded as a sovereign body because",
        answers: [
            {
                text: "it can legislate only on subjects entrusted to the Centre by the Constitution",
                correct: false
            },
            {
                text: "it has to operate within the limits prescribed by the Constitution",
                correct: false
            },
            {
                text: "the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution",
                correct: false
            },
            {
                text: "All of the above",
                correct: true
            }
        ],
        appeared: false
    },
    {
        question: "The members of the Rajya Sabha are elected by",
        answers: [
            {
                text: "the people",
                correct: false
            },
            {
                text: "Lok Sabha",
                correct: false
            },
            {
                text: "elected members of the legislative assembly",
                correct: true
            },
            {
                text: "elected members of the legislative council",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "The power to decide an election petition is vested in the",
        answers: [
            {
                text: "Parliament",
                correct: false
            },
            {
                text: "Supreme Court",
                correct: false
            },
            {
                text: "High courts",
                correct: true
            },
            {
                text: "Election Commission",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "'OS' computer abbreviation usually means ?",
        answers: [
            {
                text: "Order of Significance",
                correct: false
            },
            {
                text: "Open Software",
                correct: false
            },
            {
                text: "Operating System",
                correct: true
            },
            {
                text: "Optical Sensor",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "'.MOV' extension refers usually to what kind of file?",
        answers: [
            {
                text: "Image file",
                correct: false
            },
            {
                text: "Animation/movie file",
                correct: true
            },
            {
                text: "Audio file",
                correct: false
            },
            {
                text: "MS Office document",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "What is part of a database that holds only one type of information?",
        answers: [
            {
                text: "Report",
                correct: false
            },
            {
                text: "Field",
                correct: true
            },
            {
                text: "Record",
                correct: false
            },
            {
                text: "File",
                correct: false
            }
        ],
        appeared: false
    },
    {
        question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
        answers: [
            {
                text: "Sound",
                correct: false
            },
            {
                text: "Remote control",
                correct: true
            },
            {
                text: "Color balance",
                correct: false
            },
            {
                text: "High voltage",
                correct: false
            }
        ],
        appeared: false
    }
];
const questionElement = document.querySelector('#question');
const answerElement = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-btn');
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    questions.forEach(question => {
        question.appeared = false;
    })
    showQuestion();
}
function resetState() {
    nextButton.style.display = 'none';
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}
function showQuestion() {
    resetState();
    let number = Math.floor(Math.random() * questions.length);
    let currentQuestion = questions[number];
    if (currentQuestion.appeared === true) {
        while (currentQuestion.appeared !== false) {
            number += 1;
            currentQuestion = questions[number];
        }
    }
    currentQuestion.appeared = true;
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of 5!`;
    nextButton.innerHTML = 'Play again';
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < 5) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();