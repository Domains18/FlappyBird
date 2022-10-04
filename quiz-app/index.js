//assigning variables
let detailForm = document.getElementsByClassName('form-');
let name = document.getElementById('name');
let age = document.getElementById('age');
let categories=document.getElementsByClassName('categories')
//submit variables
let submitForm = document.getElementById('submitForm');

//lets build that app ;)
//set question UI to none
for(i=0; i<categories.length; i++){
    categories[i].classList.add('display');
}

//validate user and age
submitForm.addEventListener('click', ()=>{
    if(!names || !age){
        window.alert('Name or Age Cannot ne blank');
    }
    else{
        if (age => 15 ){
            hardQuestions();
        }
    }
});