//create an array object to put our question, and answer.
//a global variable to evaluate our answer
 let rightAnswer;
 let currentQuestionIndex = 0;
 let previousQuestion = 0;
 let rightAnswers = 0;
 let wrongAsnwers = 0;
 const cuestionary = [
    {
        "question": "Who discovered America?",
        "answer": ["Colón","Charles Darwin","Platon", "Albert Eisten"]
    },
    {
        "question": "who made the law of universal gravitation?",
        "answer": ["Albert Eisten","Charles Darwin","Platon", "Me"]
    },
    {
        "question": "Which is the capital of Ecuador",
        "answer": ["Quito","Buenos Aires","Lima", "San Josè"]
    }
]
//print our question and answer ,  to do that we will create a function.
const printHTMLQuestion = (i) =>{
    currentQuestionIndex ++;
    previousQuestion --;
    const q = cuestionary[i];
    let a = q.answer;
    rightAnswer = a[0];

    const htmlAnswerArray = a.map( currentA => `<p class="answer"><button onClick="evaluateAnswers('${currentA}', this)">X</button> <span>${currentA}</span></p>`);
    const htmlAnswer = htmlAnswerArray.join(' ');
    let HTMLquestionCode = `<p>${q.question}</p><div>${htmlAnswer}</div>`;

    document.querySelector('.question').innerHTML = HTMLquestionCode;
}

//create a function to evaluate our answer 
const evaluateAnswers = (answer, obj) => {
       document.querySelectorAll('.answer').forEach(a => a.classList.remove('right','wrong'));
       const parentP = obj.parentNode;
       if (answer == rightAnswer) {
             parentP.classList.add('right');
             rightAnswers++;
             document.querySelector('.rightA').innerHTML = rightAnswers;
       }else{
           parentP.classList.add('wrong');
           wrongAsnwers++;
           document.querySelector('.wrongA').innerHTML = wrongAsnwers;
       }
}
// function for the button next question
const nextQuestion = _  =>{

}

const prevQuestion = _ =>{
    
}

printHTMLQuestion(currentQuestionIndex);


