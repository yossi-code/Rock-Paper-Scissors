function computerPlay(){
    numeroGerado = Math.random()
    if (numeroGerado <= 0.33){
        return "rock";
    } else if (numeroGerado > 0.33 && numeroGerado <= 0.66){
        return "paper";
    } else if (numeroGerado > 0.66) {
        return "scissors";
    }
}
let playerHand;

function playerSelection(){
    playerHand = prompt("Type your hand: Rock, Paper or Scissors?");
    return playerHand;
}

function playRound(playerSelection, computerPlay){
    if (playerHand.toLowerCase() === computerPlay){
        return "Draw Game";
    } else if (playerSelection.toLowerCase() === "rock" && computerPlay === "scissors"){
        return "Human Wins";
    } else if (playerSelection.toLowerCase() === "rock" && computerPlay === "paper"){
        return "Computer Wins";
    } else if (playerSelection.toLowerCase() === "paper" && computerPlay === "scissors"){
        return "Computer Wins";
    } else if (playerSelection.toLowerCase() === "paper" && computerPlay === "rock"){
        return "Human Wins";
    } else if (playerSelection.toLowerCase() === "scissors" && computerPlay === "paper"){
        return "Human Wins";
    } else if (playerSelection.toLowerCase() === "scissors" && computerPlay === "rock"){
        return "Computer Wins";
    }
}

function game(){
    let winHuman = 0, winComputer = 0;
    for (i=0; i<5; i++){
    playRound(playerSelection(), computerPlay());
        if (playRound(playerSelection, computerPlay) === "Human Wins") winHuman += winHuman;
        else if (playRound(playerSelection, computerPlay) === "Computer Wins") winComputer += winComputer;
    }
    console.log("Human Score: " +winHuman)
    console.log("Computer Score: " +winComputer);
}

console.log(game());