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

function playerSelection(){
    playerHand = prompt("Type your hand: Rock, Paper or Scissors?");
    return playerHand.toLowerCase();
}


function game(){
    humanWins = 0, computerWins = 0;
    for (i=0; i<5; i++){
        function playRound(playerSelection, computerPlay){
            player = playerSelection;
            computer = computerPlay;
            console.log("Mão do Computer: "+computer);
            if (player === computer){
                return console.log("Draw Game");
            } else if (player === "rock" && computer === "scissors"){
                humanWins += 1;
                return console.log("Human Wins");
            } else if (player === "rock" && computer === "paper"){
                computerWins += 1;
                return console.log("Computer Wins");
            } else if (player === "paper" && computer === "scissors"){
                computerWins += 1;
                return console.log("Computer Wins");
            } else if (player === "paper" && computer === "rock"){
                humanWins += 1;
                return console.log("Human Wins");
            } else if (player === "scissors" && computer === "paper"){
                humanWins += 1;
                return console.log("Human Wins");
            } else if (player === "scissors" && computer === "rock"){
                computerWins += 1;
                return console.log("Computer Wins");
            }
        }
        playRound(playerSelection(), computerPlay());
        console.log("Vitórias dos Humanos: "+ humanWins);
        console.log("Vitórias dos Computers: "+ computerWins);
    }
}
game();