//assigning variables
let detailForm = document.getElementsByClassName('form-');
let names = document.getElementById('name');
let age = document.getElementById('age');
let questions=document.getElementsByClassName('questions')
//submit variables
let submitForm = document.getElementById('submitForm');

//lets build that app ;)
//set question UI to none
for(i=0; i<questions.length; i++){
    questions[i].classList.add('display');
}

//validate user and age
submitForm.addEventListener('click', runEvent);

function runEvent(e){
    e.preventDefault();
    if( names== "" || !age.value){
        alert("Name or Age cant be null");
    } else{
        if(age.value>15){
            alert('You are too old for this quiz app!');
        } else{
            beginQuestions();
        }
    }
}

// questions
function beginQuestions(){
    for (i = 0; i < detailForm.length; i++) {
        detailForm[i].classList.add('display');
    }
    for (i = 0; i < questions.length; i++) {
        questions[i].classList.add('display2');
    }
    let userName = document.getElementsByClassName('user');
    NewText = document.createTextNode("welcome," + " " +names.value);
    for(i=0; i<userName.length; i++){
        userName[i].appendChild(NewText);
        Startquestions();
    }
}

function Startquestions (){
    let answer = document.getElementById('answer');
    let getAnswer= document.getElementById('getAnswer');

    getAnswer.addEventListener('click', ()=>{
        if (answer.value = "")
        //to be continued
    })
}