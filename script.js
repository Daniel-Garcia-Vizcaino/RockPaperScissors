let playerScore = 0;
let computerScore = 0;
const yourScoreText = document.querySelector("#yourScore");
const computerScoreText = document.querySelector("#computerScore");

function playRock(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    let answerIMG = document.querySelector("#resultIMG");
    if(computerChoice === 0){
        playerScore += 1;
        yourScoreText.innerHTML = playerScore;
        answerIMG.setAttribute("src", "images/rockVSscissors.png");
        if (playerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
        }
    }else if(computerChoice === 1){
        answerIMG.setAttribute("src", "images/rockVSrock.png");
    }else if(computerChoice === 2){
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
        answerIMG.setAttribute("src", "images/rockVSpaper.png");
        if (computerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
        }
    }
}

const rockbutton = document.querySelector("#rock");

rockbutton.addEventListener("click", playRock);

function playPaper(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    let answerIMG = document.querySelector("#resultIMG");
    if(computerChoice === 0){
        playerScore += 1;
        yourScoreText.innerHTML = playerScore;
        answerIMG.setAttribute("src", "images/paperVSrock.png");
        if (playerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
        }
    }else if(computerChoice === 1){
        answerIMG.setAttribute("src", "images/paperVSpaper.png");
    }else if(computerChoice === 2){
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
        answerIMG.setAttribute("src", "images/paperVSscissors.png");
        if (computerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
        }
    }
}

const paperbutton = document.querySelector("#paper");

paperbutton.addEventListener("click", playPaper);

function playScissors(){
    let computerChoice = Math.floor(Math.random()*3);
    let answer = document.querySelector("#answer");
    let answerIMG = document.querySelector("#resultIMG");
    if(computerChoice === 0){
        playerScore += 1;
        yourScoreText.innerHTML = playerScore;
        answerIMG.setAttribute("src", "images/scissorsVSpaper.png");
        if (playerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
        }
    }else if(computerChoice === 1){
        answerIMG.setAttribute("src", "images/scissorsVSscissors.png");
    }else if(computerChoice === 2){
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
        answerIMG.setAttribute("src", "images/scissorsVSrock.png");
        if (computerScore > 4) {
            let answer = document.querySelector("#answer");
            answer.innerHTML = "Refresh the page to play again";
            answerIMG.setAttribute("src", "images/.png");
            const scissorsbutton = document.querySelector("#scissors");
            scissorsbutton.removeEventListener("click", playScissors);
            const rockbutton = document.querySelector("#rock");
            rockbutton.removeEventListener("click", playRock);
            const paperbutton = document.querySelector("#paper");
            paperbutton.removeEventListener("click", playPaper);
        }
    }
}

const scissorsbutton = document.querySelector("#scissors");

scissorsbutton.addEventListener("click", playScissors);



