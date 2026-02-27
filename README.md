# demo.1
uno game 
# Uno Game
A simple, browser-based Uno card game where you play against a computer AI. Built with pure HTML, CSS, and JavaScript—no external libraries required. Perfect for quick play and easy hosting on GitHub Pages.

## Features
## Player vs Computer: Play against a basic AI that makes valid moves or draws cards.
 Uno Rules: Supports matching colors/numbers, special cards (Skip, Reverse, Draw Two, Wild, Wild Draw Four), and turn skipping.
 Visual Design: Cards styled to resemble real Uno cards with colors (red, blue, green, yellow) and text. Computer's hand is visible for transparency.
Responsive UI: Works on desktop and mobile devices.
Game Flow: Automatic turn switching, win detection, and new game restarts.
Static Hosting: No server needed—runs entirely in the browser.
How to Run
Clone or Download: Download the repository files (index.html, style.css, script.js) to a local folder.
Open in Browser: Double-click index.html or drag it into your web browser (Chrome, Firefox, etc.).
Play: Click your cards to play, or the "Draw Pile" to draw. The computer plays automatically.
New Game: Click the "New Game" button to restart.
For online hosting:	

## Push to a GitHub repository.
Enable GitHub Pages in Settings > Pages (select the main branch).
Access at https://yourusername.github.io/repository-name/.
Gameplay
## Objective: Be the first to play all your cards.
Turns: You go first. Play a card that matches the discard pile's color or number (or use a Wild). Special cards have effects:
Skip: Skips the next player's turn.
Reverse: Reverses turn order (though with 2 players, it just swaps).
Draw Two: Opponent draws 2 cards.
Wild: Choose a color (simplified to red in code; can be enhanced).
Wild Draw Four: Opponent draws 4 cards and choose color.
Drawing: If you can't play, click the draw pile to draw a card (ends your turn).
AI Behavior: Computer plays the first valid card or draws if none available.
Winning: Alert pops up when a player empties their hand.
Technologies Used
HTML: Structure the game board and elements.
CSS: Styling for cards, layout, and responsiveness.
JavaScript: Game logic, deck shuffling, AI, and UI updates.
Screenshots
Initial Game Screen


## During Gameplay
After playing a card, the discard pile updates, and the status changes to "Computer's turn...".
Hover over your cards for a scaling effect.
Contributing
Feel free to fork and improve! Ideas:

## Smarter AI.
UI prompts for Wild card color selection.
Multiplayer mode (requires backend).
Sound effects or animations.
Submit pull requests with changes.
## License
This project is open-source under the MIT License. Use freely, but credit appreciated.

## Credits
Inspired by the classic Uno game. Built as a fun web development project. If you have questions or issues, open a GitHub issue!
