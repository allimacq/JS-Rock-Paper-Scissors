const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

const playerSelection = () => {
        let selection = prompt("Choose Rock, Paper, or Scissors").toLowerCase().trim();
        if (selection !== "rock" || selection !== "paper" || selection !== "scissors") {
            selection = prompt("You can only enter Rock, Paper, or Scissors. If you don't, I'll choose Rock.", "rock").toLowerCase().trim();
        }
        return selection;
}