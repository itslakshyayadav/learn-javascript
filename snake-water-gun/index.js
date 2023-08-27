function computerChoice() {
  const choices = ["snake", "water", "gun"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function userChoice(userSelection) {
  const computerSelection = computerChoice();
  const result = determineResult(userSelection, computerSelection);
  displayResult(result, userSelection, computerSelection);
}

function determineResult(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (userSelection === "snake" && computerSelection === "water") ||
    (userSelection === "water" && computerSelection === "gun") ||
    (userSelection === "gun" && computerSelection === "snake")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(result, userSelection, computerSelection) {
  const gameResultElement = document.getElementById("gameResult");
  gameResultElement.textContent = `You chose ${userSelection}, Computer chose ${computerSelection}. ${result}`;
}
