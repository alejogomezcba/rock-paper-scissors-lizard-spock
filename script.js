const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let cpuScore = 0;

function playGame(playerChoice) {
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById("result-text");
    const playerScoreEl = document.getElementById("player-score");
    const cpuScoreEl = document.getElementById("cpu-score");

    let result = checkWinner(playerChoice, cpuChoice);

    if (result === "win") {
        playerScore++;
        resultText.innerHTML = `🎉 ¡Ganaste! ${playerChoice} vence a ${cpuChoice}`;
    } else if (result === "lose") {
        cpuScore++;
        resultText.innerHTML = `😢 Perdiste... ${cpuChoice} vence a ${playerChoice}`;
    } else {
        resultText.innerHTML = `🤝 ¡Empate! Ambos eligieron ${playerChoice}`;
    }

    playerScoreEl.textContent = playerScore;
    cpuScoreEl.textContent = cpuScore;
}

function checkWinner(player, cpu) {
    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    if (player === cpu) {
        return "draw";
    } else if (rules[player].includes(cpu)) {
        return "win";
    } else {
        return "lose";
    }
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = cpuScore;
    document.getElementById("result-text").textContent = "Haz tu elección...";
}
