
const startButton = document.gelElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let shuffledQuestions,currectQuestionIndex;
let quizScore =0;


function showQuestion(question) {
    questionElement.innerText= question=question;
    question.answer.forEach(answer) =>{
        constbutton =document.createElement('button')
        button.innerText=answer
    }
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.daatset = correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(elemrnt,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question =[
    {
        question: 'which one of these is a JavaScript framwork?',
        answer :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React',  correct: true},
            {text: 'Eclipse', correct: false}
        ],
    },
    {
        question: 'who is the prime minister of India?',
        answer :[
            {text: 'modi', correct: false},
            {text: 'narendra modi', correct: false},
            {text: 'rahul gandhi',  correct: true},
            {text: 'kejrival', correct: false}
        ],
    },
    {
        question: 'what is 4*37?',
        answer :[
            {text: '6', correct: false},
            {text: '12', correct: false},
            {text: '24',  correct: true},
            {text: '36', correct: false}
        ],
    },
]
