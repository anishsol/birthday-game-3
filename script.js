const choices = ['rock', 'paper', 'scissors'];

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win! Happy Birthday, Birthday Boy!';
    } else {
        result = 'You lose! Better luck next time, Birthday Boy!';
    }

    document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function restartGame() {
    document.getElementById('result').textContent = '';
}
