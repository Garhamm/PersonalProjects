import Game from "./game.js";

let game = new Game();

console.log(game.turn);
game.nextTurn();
console.log(game.board);