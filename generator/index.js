let names = document.getElementById("names");
let amount = document.getElementById("amount");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

const users = [];

submit.addEventListener("click", ()=>{
    if(names.value =="" || !amount.value){
        window.alert("Name or amount Can't be null!")
    } else{
        if (amount.value<1000){
            output = ("Hello," +" " +names.value +" " +"Your Amount is too little:");
            result.innerHTML = output;  
        } else {
            //ticket generation
            generateTicket();
        };
    };
});

function generateTicket(e){
    setTimeout((function (){
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let ticketLength = 10;
        let ticket = "";
        for (i=0; i<ticketLength; i++){
            let randomTicket = Math.floor(Math.random()* chars.length);
            ticket += chars.substring(randomTicket, randomTicket +1);
        }
        function saveTicket(){
            users.push(names.value, ticket);
            console.log(users);
        }
        saveTicket();
    }
    ),1000);
};