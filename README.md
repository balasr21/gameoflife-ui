# Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway.This is a no player game with 3 simple rules

The universe of the Game of Life is an infinite two­dimensional orthogonal grid of squarecells, each of which
is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the
cells that are horizontally, vertically, or diagonally adjacent.

### Rules:

At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under­population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overcrowding.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above
rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete
moment at which this happens is sometimes called a tick (in other words, each generation is a pure function
of the preceding one). The rules continue to be applied repeatedly to create further generations.

## Solution

1. This App is built using React
2. Backend is managed in Spring Boot and can be found https://github.com/balasr21/GameOfLife
3. This App allows user to enter the dimension(optional default of 20\*20 is used),select the live cells(optional), and click on START to play
4. If no live cells are added by user, Play usually starts from the top of the matrix (with the Glider pattern - more info about this pattern can be found here https://en.wikipedia.org/wiki/Glider_(Conway%27s_Life))
5. For every tick , front end places request to backend for the specific dimension,and the live cells details. As a response, we get next generation of live cells and those are displayed. Game doesnt stop until STOP button is pressed

Here is the screenshot of the game

![alt text](https://github.com/balasr21/gameoflife-ui/blob/main/GameOfLife-Screenshot.png?raw=true)

## Access

This solution is now available in

### `https://gameofapi.web.app/`

Hosted in Firebase
