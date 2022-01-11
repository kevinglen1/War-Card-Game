/*----- constants -----*/
const suits = ["h", "d", "s", "c"];
const values = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const numericValue = {
  "02": 2,
  "03": 3,
  "04": 4,
  "05": 5,
  "06": 6,
  "07": 7,
  "08": 8,
  "09": 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

/*----- app's state (variables) -----*/
let deck = [];
let playerOneHand = [];
let playerTwoHand = [];

let playerOneInPlay = [];
let playerTwoInPlay = [];

let playerOneValue = null;
let playerTwoValue = null;

let cardOne = "a";
let cardTwo = "a";
/*----- cached element references -----*/
const playerOneCardOne = document.querySelector("#player-one");
const playerTwoCardOne = document.querySelector("#player-two");
const playBtn = document.querySelector("#play");
const collectCardsBtn = document.querySelector("#collect-cards");
const commentator = document.querySelector("#commentator");

/*----- event listeners -----*/
playBtn.addEventListener("click", playHand);
/*----- functions -----*/
init();

function init() {
  getDeck();
  shuffle(deck);
  dealCards(deck);
}

function render() {
  playerOneCardOne.classList.remove(cardOne);
  cardOne = playerOneInPlay[0].Suit + playerOneInPlay[0].Value;
  playerOneCardOne.classList.add(cardOne);

  playerTwoCardOne.classList.remove(cardTwo);

  cardTwo = playerTwoInPlay[0].Suit + playerTwoInPlay[0].Value;
  playerTwoCardOne.classList.add(cardTwo);
}

function getDeck() {
  deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = {
        Value: values[x],
        Suit: suits[i],
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function dealCards() {
  for (let i = 0; i < 52; i++) {
    if (i % 2 == 0) {
      playerOneHand.push(deck.pop());
    } else {
      playerTwoHand.push(deck.pop());
    }
  }
}

//shows cards and puts cards into new array
function playHand() {
  if (playerOneHand.length === 0) {
    commentator.innerText = "You Win the Game!";
  } else if (playerTwoHand.length === 0) {
    commentator.innerText = "You Lose the Game!";
  } else {
    if (playerOneValue > playerTwoValue) {
      playerOneHand.push(...playerOneInPlay);
      playerOneInPlay = [];

      playerOneHand.push(...playerTwoInPlay);
      playerTwoInPlay = [];
    } else if (playerTwoValue > playerOneValue) {
      playerTwoHand.push(...playerOneInPlay);
      playerOneInPlay = [];

      playerTwoHand.push(...playerTwoInPlay);
      playerTwoInPlay = [];
    }
    console.log({
      playerTwoHand: playerTwoHand,
      playerOneHand: playerOneHand,
      playerOneInPlay: playerOneInPlay,
      playerTwoInPlay: playerTwoInPlay,
    });
    playerOneInPlay.unshift(playerOneHand.pop());
    playerTwoInPlay.unshift(playerTwoHand.pop());
    playerOneValue = numericValue[playerOneInPlay[0].Value];
    playerTwoValue = numericValue[playerTwoInPlay[0].Value];
  }

  render();

  if (playerOneValue > playerTwoValue) {
    console.log("lost");
    commentator.innerText = "You Lost the Round!";
  } else if (playerTwoValue > playerOneValue) {
    console.log("win");
    commentator.innerText = "You Won the Round!";
  } else if (playerOneValue === playerTwoValue) {
    console.log("war");
    commentator.innerText = "War!";
  }
}