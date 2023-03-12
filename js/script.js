
const cardArray = [
    {
        name: 'bootstrap',
        img: '../image/boo.png',
    },
    {
        name: 'java',
        img: '../image/java.png',
    },
    {
        name: 'javascript',
        img: '../image/js.png',
    },
    {
        name: 'python',
        img: '../image/py.png',
    },
    {
        name: 'react',
        img: '../image/react.png',
    },
    {
        name: 'typescript',
        img: '../image/ts.png',
    },

    // 2

    {
        name: 'bootstrap',
        img: '../image/boo.png',
    },
    {
        name: 'java',
        img: '../image/java.png',
    },
    {
        name: 'javascript',
        img: '../image/js.png',
    },
    {
        name: 'python',
        img: '../image/py.png',
    },
    {
        name: 'react',
        img: '../image/react.png',
    },
    {
        name: 'typescript',
        img: '../image/ts.png',
    },

];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultEl = document.querySelector('#result');

let cardChosen = [];
let cardsChosenIds = [];
const cardWon = [];

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'image/bg.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
creatBoard();

function flipCard() {
   const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const opOne = cardsChosenIds[0];
    const optwo = cardsChosenIds[1];

    if (opOne == optwo) {
        cards[opOne].setAttribute('src', 'image/bg.png');
        cards[optwo].setAttribute('src', 'image/bg.png');
    }

    if (cardChosen[0] == cardChosen[1]) {
        resultEl.textContent = "Very Good!";
        cards[opOne].setAttribute('src', 'image/block.png');
        cards[optwo].setAttribute('src', 'image/block.png');
        cards[opOne].removeEventListener('click', flipCard);
        cards[optwo].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        cards[opOne].setAttribute('src', 'image/bg.png');
        cards[optwo].setAttribute('src', 'image/bg.png');
        resultEl.textContent = "Try Agian!";
    }

    if (cardWon.length == cardArray.length/2) {
        resultEl.textContent = "You Win in the Memory Game!";
    }

    cardChosen = [];
    cardsChosenIds = [];
}