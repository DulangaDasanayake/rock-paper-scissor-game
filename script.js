function playgame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie! Both chose${plyerChoice}.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You won! ${playerChoice} beats ${computerChoice}.";
  } else {
    result = "You lost! ${computerChoice} beats ${playerChoice}.";
  }

  document.getElementById("result").innerHTML = result;
}
