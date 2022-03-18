const TextScreen = document.querySelector(".text");
const MoneyField = document.querySelector("[money-points]");
const PointsField = document.querySelector("[data-points]");
const Points2Field = document.querySelector("[data-points2]");
const TotBetField = document.querySelector("[bet-field]");

const startButton = document.querySelector("#start-action");
startButton.addEventListener("click", start);

const hitbutton = document.querySelector("#hit-action");
hitbutton.addEventListener("click", hit);

const standbutton = document.querySelector("#stand-action");
standbutton.addEventListener("click", stand);

const resetbutton = document.querySelector("#reset-action");
resetbutton.addEventListener("click", reset);

const IooBet = document.querySelector("#IooB");
IooBet.addEventListener("click", Ioobutton);

const RoBet = document.querySelector("#RoB");
RoBet.addEventListener("click", Robutton);

const soBet = document.querySelector("#soB");
soBet.addEventListener("click", sobutton);

const IoBet = document.querySelector("#IoB");
IoBet.addEventListener("click", Iobutton);

let dealerP = 0;
let playerP = 0;
let moneys = 100;
let TotBet = 0;
let has_bet = false;
let has_start = false;

function Ioobutton(event) {
  if (moneys > 0) {
    moneys -= 100;
    TotBet += 100;
    has_bet = true;
    updateFields();
  }
}
function Robutton(event) {
  if (moneys > 0) {
    moneys -= 50;
    TotBet += 50;
    has_bet = true;
    updateFields();
  }
}
function sobutton(event) {
  if (moneys > 0) {
    moneys -= 20;
    TotBet += 20;
    has_bet = true;
    updateFields();
  }
}
function Iobutton(event) {
  if (moneys > 0) {
    moneys -= 10;
    TotBet += 10;
    has_bet = true;
    updateFields();
  }
}

function start(event) {
  if (has_bet == true) {
    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let Randomcard = Math.floor(Math.random() * cards.length);
    let Randomcard2 = Math.floor(Math.random() * cards.length);
    console.log("start???..");
    playerP = cards[Randomcard] + cards[Randomcard];
    dealerP = cards[Randomcard2] + cards[Randomcard2];
    has_start = true;

    if (dealerP > 21 && playerP > 21) {
      moneys += TotBet * 2;
      TextScreen.innerHTML = "Draw";
    }
    if (dealerP === 21 || (playerP > 21 && playerP != 21)) {
      TextScreen.innerHTML = "You Lose";
    }
    if (dealerP > 21 || playerP === 21) {
      moneys += TotBet * 2;
      TextScreen.innerHTML = "You win";
    }
    updateFields();
  }
}

function hit(event) {
  if (playerP < 21 && dealerP < 21 && has_start === true) {
    let slump = Math.floor(Math.random() * 13) + 1;
    playerP += slump;

    if (dealerP > 21 && playerP > 21) {
      moneys += TotBet * 2;
      TextScreen.innerHTML = "Draw";
    }
    if (dealerP === 21 || (playerP > 21 && playerP != 21)) {
      console.log("dealer win");
      TextScreen.innerHTML = "You Lose";
    }
    if (dealerP > 21 || playerP === 21) {
      moneys += TotBet * 2;
      TextScreen.innerHTML = "You win";
    }
    updateFields();
  }
}
function stand(event) {
  if (playerP < 21 && dealerP < 21 && dealerP < playerP && has_start === true) {
    let slump3 = Math.floor(Math.random() * 13) + 1;
    dealerP += slump3;

    if (dealerP > 21 || playerP === 21) {
      moneys += TotBet * 2;
      TextScreen.innerHTML = "You win";
    }
    updateFields();
  }
}

function reset(event) {
  if (dealerP > 21 || playerP > 21 || dealerP === 21 || playerP === 21) {
    dealerP = 0;
    playerP = 0;
    TotBet = 0;
    TotBetField.innerHTML = TotBet;
    TextScreen.innerHTML = "";
    has_start = false;
    has_bet = false;
    updateFields();
  }
}

function updateFields() {
  PointsField.innerHTML = playerP;
  Points2Field.innerHTML = dealerP;
  MoneyField.innerHTML = moneys;
  TotBetField.innerHTML = TotBet;
}

updateFields();
