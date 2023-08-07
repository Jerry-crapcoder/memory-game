const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    }
]

cardArray.sort(()=>0.5-Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOne = cardsChosenIds[0];
    const optionTwo = cardsChosenIds[1];
    if(optionOne == optionTwo){
        alert("you clicked the same image");
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('you found match');
        cards[optionOne].setAttribute('src', 'img/white.png');
        cards[optionTwo].setAttribute('src', 'img/white.png');
        cards[optionOne].removeEventListener('click', flipCard);
        cards[optionTwo].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[optionOne].setAttribute('src', 'img/blank.png');
        cards[optionTwo].setAttribute('src', 'img/blank.png');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all !!!'
    }
}

function flipCard(){
    console.log(cardArray);
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}