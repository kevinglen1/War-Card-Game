/*----- constants -----*/
const suits = ['h', 'd', 's', 'c']
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
const playerOneCardOne = document.querySelector("#player-one")
const playerOneCardtwo = document.querySelector("#player-two")
/*----- event listeners -----*/
/*----- functions -----*/
init();

function init() {
    board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    render();
  }


function render() {

}

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++) {
		for(let x = 0; x < values.length; x++) {
			let card = {Value: values[x], Suit: suits[i]};
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


shuffle(deck);
console.log(deck);