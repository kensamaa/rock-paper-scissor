var UserScore=0;
var ComputerScore=0
const UserScore_span=document.getElementById("user-score");
const ComputerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices =['r','p','s'];
    const randomnumber= Math.floor(Math.random()*3 );//random number from 1 to 3
    return choices[randomnumber];
} 
function convertToWord(letter){
if(letter==="r")return "rock";
if(letter==="p")return "paper";
return "scissors";
}

function win(user,computer){
UserScore++;
UserScore_span.innerHTML=UserScore;
ComputerScore_span.innerHTML=ComputerScore;
result_p.innerHTML=convertToWord(user) +" beats "+convertToWord(computer)+" you win 😭";
const userchoicediv=document.getElementById(user);

userchoicediv.classList.add("green-glow");//glow greenn
setTimeout(function(){userchoicediv.classList.remove("green-glow")},300);//remove the glow after 1 sec
}

function lose(user,computer){ 
ComputerScore++;
UserScore_span.innerHTML=UserScore;
ComputerScore_span.innerHTML=ComputerScore;
result_p.innerHTML=convertToWord(computer) +" beats "+convertToWord(user)+" you loose 😂";

const userchoicediv=document.getElementById(user);

userchoicediv.classList.add("red-glow");//glow greenn
setTimeout(function(){userchoicediv.classList.remove("red-glow")},300);//remove the glow after 1 sec
}

function draw(user,computer){
    
    result_p.innerHTML="  its a draw... 😓";
    const userchoicediv=document.getElementById(user);

userchoicediv.classList.add("grey-glow");//glow greenn
setTimeout(function(){userchoicediv.classList.remove("grey-glow")},300);//remove the glow after 1 sec
}
function Game(userChoice){
    const ComputerChoice=getComputerChoice();
    switch(userChoice+ComputerChoice){
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice,ComputerChoice)//console.log("user wins");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,ComputerChoice)//console.log("user looses");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,ComputerChoice)//console.log("its a draw");
            break;
    }
}

function main()
{
    //just turning them to button
    rock_div.addEventListener('click',function(){
        //console.log("u clicked on rock");
        Game("r");
    })
    paper_div.addEventListener('click',function(){
        //console.log("u clicked on paper");
        Game("p");
    })
    scissors_div.addEventListener('click',function(){
        //console.log("u clicked on scissors");
        Game("s");
    })
}

main();