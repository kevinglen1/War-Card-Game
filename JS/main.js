/*----- constants -----*/
const suits = ['h', 'd', 's', 'c']
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

/*----- app's state (variables) -----*/
let deck = [];
let playerOneHand = [];
let playerTwoHand = [];
/*----- cached element references -----*/
const playerOneCardOne = document.querySelector("#player-one")
const playerOneCardtwo = document.querySelector("#player-two")
/*----- event listeners -----*/
/*----- functions -----*/
init();

function init() {
  getDeck()
  shuffle(deck)
  console.log(deck)
  dealCards(deck)
  

    render();
  }


function render() {

}

function getDeck()
{
	deck = new Array();

	for(let i = 0; i < suits.length; i++) {
		for(let x = 0; x < values.length; x++) {
			let card = {
        Value: values[x], 
        Suit: suits[i]
      };
			deck.push(card);
		}
	}
	return deck;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function dealCards() {
  for (i = 0; i < 52; i++) {
    console.log(i, deck.length)
    if (i % 2 == 0) {
      playerOneHand.push(deck.pop())
    }
    else {
      playerTwoHand.push(deck.pop())
      }
    }
  }
  // console.log(deck)
  // console.log(playerOneHand)
  // console.log(playerTwoHand)
  //console.log(playerTwoHand)


  //shows cards and puts cards into new array
  function playHand() {

  }
  
  //determines winner in prints to screen

  //winner gets pot array added to the end of their hand