const container = document.querySelector('.container');

container.addEventListener('click', resultado => {
    if (humanScore == 5){
        alert("VOCE GANHOU!!!!");
    } if (computerScore == 5){
        alert("VOCE PERDEU!!!");
    }
});

let humanScore = 0;
let computerScore = 0;

const score = document.createElement('div');
score.classList.add('score');

function computerPlay(){
    numeroGerado = Math.random()
    if (numeroGerado <= 0.33){
        return "Pedra";
    } else if (numeroGerado > 0.33 && numeroGerado <= 0.66){
        return "Papel";
    } else if (numeroGerado > 0.66) {
        return "Tesoura";
    }
}

const pedra = document.querySelector(".pedra");
pedra.addEventListener('click', clica => {
    switch (computerPlay()){
        case 'Pedra':
            alert('CPU: Pedra\r\nResultado: Empate!');
            break;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
        case 'Papel':
            alert('CPU: Papel\r\nResultado: Você perdeu!!');
            computerScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
        case 'Tesoura':
            alert('CPU: Tesoura\r\nResultado: Você ganhou!!');
            humanScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
    }
});

const papel = document.querySelector(".papel");
papel.addEventListener('click', clica => {
    switch (computerPlay()){
        case 'Pedra':
            alert('CPU: Pedra\r\nResultado: Você ganhou!!');
            humanScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
        case 'Papel':
            alert('CPU: Papel\r\nResultado: Empate!!');
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
        case 'Tesoura':
            alert('CPU: Tesoura\r\nVocê perdeu!!');
            computerScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
    }
});

const tesoura = document.querySelector(".tesoura");
tesoura.addEventListener('click', clica => {
    switch (computerPlay()){
        case 'Pedra':
            alert('CPU: Pedra\r\nResultado: Você perdeu!!');
            computerScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
        case 'Papel':
            alert('CPU: Tesoura\r\nVocê ganhou!!');
            humanScore += 1;
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
        case 'Tesoura':
            alert('CPU: Tesoura\r\nEmpate!!');
            score.textContent = 'Humano:'+ humanScore+' CPU: '+computerScore;
            container.appendChild(score);
            break;
    }
});