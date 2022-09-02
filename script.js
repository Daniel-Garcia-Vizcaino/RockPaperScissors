function playRock(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    if(computerChoice === 0){
        console.log("You won! You chose rock and the computer chose scissors");
        answer.innerHTML = "You won! You chose rock and the computer chose scissors";
    }else if(computerChoice === 1){
        console.log("It's a tie, you both chose rock");
        answer.innerHTML = "It's a tie, you both chose rock";
    }else if(computerChoice === 2){
        console.log("You lost... You chose rock and the computer chose paper");
        answer.innerHTML = "You lost... You chose rock and the computer chose paper";
    }
}

const rockbutton = document.querySelector("#rock");

rockbutton.addEventListener("click", playRock);

function playPaper(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    if(computerChoice === 0){
        console.log("You won! You chose paper and the computer chose rock");
        answer.innerHTML = "You won! You chose paper and the computer chose rock";
    }else if(computerChoice === 1){
        console.log("It's a tie, you both chose paper");
        answer.innerHTML = "It's a tie, you both chose paper";
    }else if(computerChoice === 2){
        console.log("You lost... You chose paper and the computer chose scissors");
        answer.innerHTML = "You lost... You chose paper and the computer chose scissors";
    }
}

const paperbutton = document.querySelector("#paper");

paperbutton.addEventListener("click", playPaper);

function playScissors(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    if(computerChoice === 0){
        console.log("You won! You chose scissors and the computer chose paper");
        answer.innerHTML = "You won! You chose scissors and the computer chose paper";
    }else if(computerChoice === 1){
        console.log("It's a tie, you both chose rock");
        answer.innerHTML = "It's a tie, you both chose scissors";
    }else if(computerChoice === 2){
        console.log("You lost... You chose scissors and the computer chose rock");
        answer.innerHTML = "You lost... You chose scissors and the computer chose rock";
    }
}

const scissorsbutton = document.querySelector("#scissors");

scissorsbutton.addEventListener("click", playScissors);