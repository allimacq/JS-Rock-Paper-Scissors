const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

const playerSelection = () => {
    let selection = prompt("Choose Rock, Paper, or Scissors").toLowerCase().trim();
    console.log(selection)
    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection;
    } else {
        playerSelection();
    }
}

const playRound = (player, computer) => {
    player = playerSelection();
    computer = getComputerChoice();

    switch (player) {
        case "rock":
            if (computer === "rock") {
                return "It's a tie!"
            } else if (computer === "paper") {
                return "You Lose! Paper beats Rock."
            } else {
                return "You Win! Rock beats Scissors."
            }
            break;
        case "paper":
            if (computer === "rock") {
                return "You Win! Paper beats Rock."
            } else if (computer === "paper") {
                return "It's a tie!"
            } else {
                return "You Lose! Scissors beat Paper."
            }
            break;
        case "scissors":
            if (computer === "rock") {
                return "You Lose! Rock beats Scissors."
            } else if (computer === "paper") {
                return "You Win! Scissors beat Paper."
            } else {
                return "It's a tie!"
            }
            break;
    }
}

const game = () => {
    let i = 5;
    while (i > 0) {
        console.log(playRound());
        i--;
    }
}