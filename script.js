// Základní proměnné
const BODY = 30;
let totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart() {
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    // Vynulování a odstranění kostky
    document.getElementById("totalScorePlayer-0").textContent = "0";
    document.getElementById("totalScorePlayer-1").textContent = "0";
    document.getElementById("currentScore-0").textContent = "0";
    document.getElementById("currentScore-1").textContent = "0";
    // Skrytí kostky
    document.querySelector(".diceImage").style.display = "none";
    // Texty do původního stavu
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";
    // Vrátíme zvýraznění aktivního hráče k prvnímu a druhého odstraníme
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

// Měníme obrázek kostky podle náhodného čísla
document.querySelector(".rollDice").addEventListener("click", function () {
    if (playGame) {
        // 1. Generujeme náhodné číslo v intervalu 1-6
        dice = Math.ceil(Math.random() * 6);
        // 2. Zobrazit správný obrázek
        let diceElement = document.querySelector(".diceImage");
        diceElement.style.display = "block";
        diceElement.src = "img/" + dice + ".jpg";
        // 3. Sčítáme čísla z kostky
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
        } else {
            // Bude hrát další hráč
            nextPlayer();
        }
    }
})

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("currentScore-0").textContent = "0";
    document.getElementById("currentScore-1").textContent = "0";
    document.querySelector(".diceImage").style.display = "none";
}

document.querySelector(".holdScore").addEventListener("click", function () {
    if (playGame) {
        // Cekové skóre se vyplní současným skórem
        totalScore[activePlayer] += roundScore;
        //
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= BODY) {
            document.querySelector("#name-" + activePlayer).textContent = "Vítěz! Vítěz!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".newGame").addEventListener("click", newStart);