console.log(quiz)

const questionNumber= document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionContainer= document.querySelector('.option-container');
const answersIndicatorContainer = document.querySelector('.answers-indicator');
const homeBox = document.querySelector('.home-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//Push the question into availableQuestions Array
function setAvailaberQuestions (){
    const totalQuestion = quiz.length;

    for(let i = 0; i < totalQuestion; i++){
        // console.log(quiz[i])
        availableQuestions.push(quiz[i])

    }
    // console.log(availableQuestions)
}

function getNewQuestion(){

        //set question Number
    questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + quiz.length;

        //set question text
        //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //get the position of questionIndex from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);

    //remove the questionIndex from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1,1)
    
    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length;

    //Push option into availableOptions Array
    for(let i = 0; i < optionLen; i++){
        availableOptions.push(i)
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    //Create options in html
    for(let i = 0; i < optionLen; i++){
        //Random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
        //Get the position of optionIndex from the avalibale questions
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the optionIndex from the avalibale questions, so that the option does not repeat
        availableOptions.splice(index2,1);

        const option = document.createElement('div');
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's'
        animationDelay = animationDelay + 0.2;
        option.className = 'option';
        optionContainer.append(option)
        option.setAttribute('onclick', 'getResult(this)')
    }
    questionCounter++
    console.log(questionIndex)
}

//get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id)
    if(id === currentQuestion.answer){
        element.classList.add('correct');
        updateAnswerIndicator('correct')
        correctAnswers++;
    }else{
        element.classList.add('wrong')
        updateAnswerIndicator('wrong')


        const optionLen = optionContainer.children.length;
        for(let i =0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id)=== currentQuestion.answer){
                optionContainer.children[i].classList.add('correct');
            }
        }
    }
    attempt++;
    unclickableOptions()
}

//make all the options unclickable once the user select a option
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered")
    }
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML= '';
    const totalQuestion = quiz.length;
    for(let i=0 ; i<totalQuestion; i++){
        const indicator = document.createElement('div');
        answersIndicatorContainer.appendChild(indicator);


    }
}

function updateAnswerIndicator(markType){
    console.log(markType)
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next(){
    if(questionCounter === quiz.length){
        console.log('quiz over');
        quizOver()
    }else{
        getNewQuestion()
    }
}

function quizOver(){
    //hide quiz quizBox
    quizBox.classList.add('hide');

    //show result box

    resultBox.classList.remove('hide');
    quizResult()

}

function quizResult(){
    resultBox.querySelector('.total-question').innerHTML = quiz.length;
    resultBox.querySelector('.total-attempt').innerHTML = attempt;
    resultBox.querySelector('.total-correct').innerHTML =  correctAnswers;
    resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100
    resultBox.querySelector('.total-percentage').innerHTML = percentage.toFixed(2) + '%';
    resultBox.querySelector('.total-score').innerHTML = correctAnswers + ' / ' + quiz.length;

}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
}

function tryAgainQuiz(){
    //hide the resultBox
    resultBox.classList.add('hide');

    //Show the quizBox
    quizBox.classList.remove('hide')

    resetQuiz()
    startQuiz()
}

function goToHome(){
    //hide resultBox
    resultBox.classList.add('hide');

    //show homeBox
    homeBox.classList.remove('hide');
    resetQuiz()
}

function startQuiz(){

    //hide home box
    homeBox.classList.add('hide');

    //show quizBox

    quizBox.classList.remove('hide');

    setAvailaberQuestions()
    getNewQuestion()
    answersIndicator()
}


window.onload = function(){
    homeBox.querySelector('.total-questions').innerHTML = quiz.length
}

