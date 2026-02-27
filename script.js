// Game variables
let deck = [];
let playerHand = [];
let computerHand = [];
let discardPile = [];
let currentPlayer = 'player'; // 'player' or 'computer'
let currentColor = null;
let direction = 1; // 1 for clockwise, -1 for counterclockwise

// Card types
const colors = ['red', 'blue', 'green', 'yellow'];
const specials = ['Skip', 'Reverse', 'Draw Two'];
const wilds = ['Wild', 'Wild Draw Four'];

// Initialize deck
function createDeck() {
    deck = [];
    colors.forEach(color => {
        for (let i = 0; i <= 9; i++) {
            deck.push({ color, value: i.toString() });
            if (i !== 0) deck.push({ color, value: i.toString() }); // Two of each number except 0
        }
        specials.forEach(special => {
            deck.push({ color, value: special });
            deck.push({ color, value: special });
        });
    });
    wilds.forEach(wild => {
        for (let i = 0; i < 4; i++) deck.push({ color: 'wild', value: wild });
    });
    shuffleDeck();
}

// Shuffle deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Deal cards
function dealCards() {
    playerHand = [];
    computerHand = [];
    for (let i = 0; i < 7; i++) {
        playerHand.push(deck.pop());
        computerHand.push(deck.pop());
    }
    discardPile = [deck.pop()];
    currentColor = discardPile[0].color;
    updateDisplay();
}

// Update UI
function updateDisplay() {
    document.getElementById('computer-card-count').textContent = computerHand.length;
    const computerCardsDiv = document.getElementById('computer-cards');
    computerCardsDiv.innerHTML = '';
    computerHand.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.color} computer-card`;
        cardDiv.textContent = card.value;
        computerCardsDiv.appendChild(cardDiv);
    });
    const playerCardsDiv = document.getElementById('player-cards');
    playerCardsDiv.innerHTML = '';
    playerHand.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.color}`;
        cardDiv.textContent = card.value;
        cardDiv.onclick = () => playCard(index);
        playerCardsDiv.appendChild(cardDiv);
    });
    const topCardDiv = document.getElementById('top-card');
    if (discardPile.length > 0) {
        const topCard = discardPile[discardPile.length - 1];
        topCardDiv.className = `card ${topCard.color}`;
        topCardDiv.textContent = topCard.value;
    }
    document.getElementById('game-status').textContent = currentPlayer === 'player' ? 'Your turn!' : 'Computer\'s turn...';
}

// Play card
function playCard(index) {
    if (currentPlayer !== 'player') return;
    const card = playerHand[index];
    if (isValidMove(card)) {
        playerHand.splice(index, 1);
        discardPile.push(card);
        handleSpecialCard(card);
        currentColor = card.color === 'wild' ? promptColor() : card.color;
        if (playerHand.length === 0) {
            alert('You win!');
            return;
        }
        currentPlayer = 'computer';
        setTimeout(computerTurn, 1000);
    } else {
        alert('Invalid move!');
    }
    updateDisplay();
}

// Computer turn
function computerTurn() {
    let played = false;
    for (let i = 0; i < computerHand.length; i++) {
        if (isValidMove(computerHand[i])) {
            const card = computerHand.splice(i, 1)[0];
            discardPile.push(card);
            handleSpecialCard(card);
            currentColor = card.color === 'wild' ? 'red' : card.color; // AI always chooses red for wild
            played = true;
            break;
        }
    }
    if (!played) {
        computerHand.push(deck.pop());
    }
    if (computerHand.length === 0) {
        alert('Computer wins!');
        return;
    }
    currentPlayer = 'player';
    updateDisplay();
}

// Draw card
function drawCard() {
    if (currentPlayer === 'player') {
        playerHand.push(deck.pop());
        currentPlayer = 'computer';
        setTimeout(computerTurn, 1000);
    }
    updateDisplay();
}

// Check if move is valid
function isValidMove(card) {
    const topCard = discardPile[discardPile.length - 1];
    return card.color === currentColor || card.value === topCard.value || card.color === 'wild';
}

// Handle special cards
function handleSpecialCard(card) {
    if (card.value === 'Skip') {
        currentPlayer = currentPlayer === 'player' ? 'computer' : 'player';
    } else if (card.value === 'Reverse') {
        direction *= -1;
    } else if (card.value === 'Draw Two') {
        const target = currentPlayer === 'player' ? computerHand : playerHand;
        for (let i = 0; i < 2; i++) target.push(deck.pop());
    } else if (card.value === 'Wild Draw Four') {
        const target = currentPlayer === 'player' ? computerHand : playerHand;
        for (let i = 0; i < 4; i++) target.push(deck.pop());
    }
}

// Prompt for wild color (simplified)
function promptColor() {
    return 'red'; // For simplicity, always red; you can enhance with a UI prompt
}

// Start new game
function startNewGame() {
    createDeck();
    dealCards();
    currentPlayer = 'player';
    direction = 1;
}

// Initialize
startNewGame();