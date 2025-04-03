document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const rollDiceBtn = document.getElementById("rollDice");
    const statusText = document.getElementById("status");
    const diceResult = document.getElementById("diceResult");

    let playerPosition = 0;
    let snakes = {16: 6, 47: 26, 49: 11, 56: 12, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78};
    let ladders = {5: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100};

    // Create board
    for (let i = 100; i >= 1; i--) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", "cell-" + i);
        cell.innerText = i;
        board.appendChild(cell);
    }

    function movePlayer(position) {
        document.querySelectorAll(".cell").forEach(cell => {
            cell.classList.remove("player");
        });

        let newPosition = position;
        if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
            statusText.innerText = `Oops! You landed on a snake! Move to ${newPosition}.`;
        } else if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
            statusText.innerText = `Great! You climbed a ladder to ${newPosition}.`;
        } else {
            statusText.innerText = `You moved to ${newPosition}.`;
        }

        document.getElementById(`cell-${newPosition}`).classList.add("player");
        return newPosition;
    }

    rollDiceBtn.addEventListener("click", () => {
        let dice = Math.floor(Math.random() * 6) + 1;
        diceResult.innerText = `You rolled a ${dice}`;
        let newPosition = playerPosition + dice;
        if (newPosition > 100) {
            statusText.innerText = `You need ${100 - playerPosition} to win. Stay at ${playerPosition}.`;
        } else {
            playerPosition = movePlayer(newPosition);
            if (playerPosition === 100) {
                statusText.innerText = "Congratulations! You won!";
                rollDiceBtn.disabled = true;
            }
        }
    });

    movePlayer(playerPosition);
});
