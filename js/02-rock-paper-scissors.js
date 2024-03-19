function getUserChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors:");
    switch (userChoice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
        case "scissor":
            return "scissors";
        default:
            return null;
    }
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "ERROR";
    }
}

function determine(userChoice, compChoice) {
    if (userChoice === compChoice) {
        alert(`Tie! You both chose ${userChoice}. Try again!`);
        return "tie";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        alert("You win!");
        return "win";
    } else {
        alert("You lose!");
        return "lose";
    }
}

function playGame() {
    let userChoice, compChoice, result;
    do {
        userChoice = getUserChoice();
        while (userChoice === null) {
            alert("Invalid choice. Try again!");
            userChoice = getUserChoice();
        }

        compChoice = getComputerChoice();

        result = determine(userChoice, compChoice);
    } while (result === "tie");
}

playGame();
