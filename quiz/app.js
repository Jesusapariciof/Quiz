console.log(quiz[0].options[0].toLowerCase())

const questionNumber= document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionContainer= document.querySelector('.option-container');
const answersIndicatorContainer = document.querySelector('.answers-indicator');
const homeBox = document.querySelector('.home-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const formBox = document.querySelector('.form-box')

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
        console.log(index2)
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
    console.log(currentQuestion.answer)
}

//get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id)
    if(id === currentQuestion.answer ){
        element.classList.add('select');
        updateAnswerIndicator('correct')
        correctAnswers++;
    }
    else{
        element.classList.add('select')
        updateAnswerIndicator('wrong')


        // const optionLen = optionContainer.children.length;
        // for(let i =0; i<optionLen; i++){
        //     if(parseInt(optionContainer.children[i].id)=== currentQuestion.answer){
        //         optionContainer.children[i].classList.add('correct');
        //     }
        // }
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
    form()
    // overDisabled()
}

function quizResult(){
    resultBox.querySelector('.total-question').innerHTML = quiz.length;
    resultBox.querySelector('.total-attempt').innerHTML = attempt;
    resultBox.querySelector('.total-correct').innerHTML =  correctAnswers;
    resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100
    resultBox.querySelector('.total-percentage').innerHTML = percentage.toFixed(2) + '%';
    resultBox.querySelector('.total-score').innerHTML = correctAnswers + ' / ' + quiz.length;
    

    if(correctAnswers <= 10){
        resultBox.querySelector('.total-level').innerHTML = 'Intermedio'
    } else if( correctAnswers >= 11 && correctAnswers <= 37){
        resultBox.querySelector('.total-level').innerHTML = 'First 1'
    }else{
        resultBox.querySelector('.total-level').innerHTML = 'First 2'
    }

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

    //hide over
    over.classList.add('hide');

    //show homeBox
    homeBox.classList.remove('hide');
    resetQuiz()
}

function goToForm(){
    //hide the resultBox
    resultBox.classList.add('hide');
    //show formBox
    formBox.classList.remove('hide');
}

function startQuiz(){

    //hide home box
    homeBox.classList.add('hide');

    //show quizBox

    quizBox.classList.remove('hide');

    setAvailaberQuestions()
    getNewQuestion()
    resetTime()
    startTimer(count)
    answersIndicator()
}

function form(){
    // formBox.querySelector('.contestadas').innerHTML = attempt;
    // formBox.querySelector('.aciertos').innerHTML =  correctAnswers;
    // formBox.querySelector('.fallos').innerHTML = attempt - correctAnswers;
     const percentage = (correctAnswers/quiz.length)*100
    // formBox.querySelector('.porcentaje').innerHTML = percentage.toFixed(2) + '%';
    // formBox.querySelector('.puntuacion').innerHTML = correctAnswers + ' / ' + quiz.length;
    
    document.querySelector('.contestadas').value = attempt;
    document.querySelector('.aciertos').value = correctAnswers;
    document.querySelector('.fallos').value = attempt - correctAnswers;
    document.querySelector('.porcentaje').value = percentage.toFixed(2) + '%';
    document.querySelector('.puntuacion').value = correctAnswers + ' / ' + quiz.length;
    if(correctAnswers <= 13){
        document.querySelector('.level').value  = 'Intermedio'
    } else if( correctAnswers >= 14 && correctAnswers <= 38){
        document.querySelector('.level').value  = 'FCE 1'
    }else{
        document.querySelector('.level').value  = 'FCE 2'
    }
    
}


window.onload = function(){
    homeBox.querySelector('.total-questions').innerHTML = quiz.length
}

const timeCount = document.querySelector('.time')
let counter;
let count = 60*30;

function startTimer(time){
counter = setInterval(timer, 1000);
function timer(){
    const  minutes = parseInt(time / 60, 10);
    const seconds = parseInt(time % 60, 10);

    timeCount.textContent = minutes + ":" + seconds;
    time --;
    if(questionCounter === quiz.length){
        clearInterval(counter)
    }
    if(time === 0){
        gameOver()
        resetTime()
    }
}

}

function resetTime(){
    clearInterval(counter)
}

//Show gameOver when time is over
const over = document.querySelector('.gameOver')
function gameOver(){
    
    //hide home box
    quizBox.classList.add('hide');

    //show quizBox

    over.classList.remove('hide');

}



// convertir segundos a minutos

// function secondsToString(seconds) {
//     var hour = Math.floor(seconds / 3600);
//     hour = (hour < 10)? '0' + hour : hour;
//     var minute = Math.floor((seconds / 60) % 60);
//     minute = (minute < 10)? '0' + minute : minute;
//     var second = seconds % 60;
//     second = (second < 10)? '0' + second : second;
//     return hour + ':' + minute + ':' + second;
// }

//   const minutos = secondsToString(count)

//   console.log(minutos)

  

   