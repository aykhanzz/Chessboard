"use strict"

document.addEventListener('DOMContentLoaded', function () {
    var chessboard = document.querySelector('.chessboard');

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let cell = document.createElement('div');
        if ((row + col) % 2 === 0) {
          cell.className = 'white';
        } else {
          cell.className = 'black';
        }
        chessboard.appendChild(cell);
      }
    }
  });