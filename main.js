let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;
//snake head
var snakeX = 5 * blockSize;
var snakeY = 5 * blockSize;
//food
let foodX = 10 * blockSize;
let foodY = 10 * blockSize;
window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); //used for drawing on the board
  placeFood();
  update();
};
function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
  //snake head
  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  //snake food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  console.log(foodX);
  console.log(foodY);
}
