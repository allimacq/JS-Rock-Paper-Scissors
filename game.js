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