function playRock(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice === 0){
        console.log("You won! You chose rock and the computer chose scissors");
    }else if(computerChoice === 1){
        console.log("It's a tie, you both chose rock");
    }else if(computerChoice === 2){
        console.log("You lost... You chose rock and the computer chose paper");
    }
}

const rockbutton = document.querySelector("#rock");

rockbutton.addEventListener("click", playRock);