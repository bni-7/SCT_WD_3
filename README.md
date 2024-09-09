# SCT_WD_3
# Tic-Tac-Toe Web Application

## Overview

This **Tic-Tac-Toe Web Application** allows two players to play against each other or one player to challenge the computer (AI). The game provides an interactive grid where users can place their moves, tracks game progress, checks for winning conditions, and declares the winner or a draw. This project is built using HTML, CSS, and JavaScript, creating a seamless and engaging user experience.

## Features

- **Two-Player Mode**: Players can play against each other on the same device.
- **Play vs. Computer**: One player can challenge the computer with a simple AI that plays randomly.
- **Real-time Game Updates**: The game tracks and displays turns, winning conditions, and draws.
- **Reset Functionality**: Players can reset the game at any time to start a new round.
- **Interactive and Responsive Design**: The game adapts to different screen sizes and provides smooth user interactions.
- **Winning Detection**: Automatically checks for winning combinations after each move and declares the winner or a draw.

## Technologies Used

- **HTML5**: For the structure and layout of the game board and interface.
- **CSS3**: For styling, creating a responsive and modern design.
- **JavaScript (ES6)**: Core game logic for handling user interactions, tracking the game state, and determining the winner or draw.

## Project Structure

```bash
.
├── time.html       # The main HTML file that contains the game structure
├── style.css        # The CSS file that styles the game board and interface
└── script.js        # The JavaScript file with logic for user interactions, game state tracking, and AI functionality
```

## How to Play

### Game Modes
1. **Two-Player Mode**: 
   - Click the **"Two Player"** button to start a two-player game.
   - Player 1 plays as `X`, and Player 2 plays as `O`.
   - Players take turns by clicking an empty cell on the 3x3 grid.
   - The first player to align three symbols (horizontally, vertically, or diagonally) wins.
   - If all cells are filled and no one has won, the game ends in a draw.

2. **Play vs. Computer Mode**: 
   - Click the **"Play vs Computer"** button to challenge the computer.
   - The player is `X`, and the computer is `O`.
   - The player moves first by clicking any empty cell.
   - The computer selects a random available cell for its move.
   - The game checks for wins or draws after every move.

### Reset Game
- To start a new game, click the **"Reset Game"** button after the current game has ended (win or draw).



## Game Flow

1. Players alternate turns, placing their symbols (`X` or `O`) in an empty cell.
2. The game checks for any winning condition after every move.
3. If a player wins, the game displays a message with the winning player.
4. If all cells are filled without a winner, the game declares a draw.
5. The game can be reset to start a new round at any time.


## Future Improvements

- **AI Enhancement**: Implement a smarter AI using the minimax algorithm for better challenge.
- **Score Tracker**: Add a score tracker to display ongoing results for multiple rounds.
- **Custom Board Size**: Allow users to customize the grid size (e.g., 4x4 or 5x5).
- **Multiplayer Support**: Expand the game to support multiplayer over the network.

