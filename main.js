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
let velocityX = 0;
let velocityY = 0;
let gameOver = false;
let snakeBody = [];
window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); //used for drawing on the board
  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 100);
};
function update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "rgb(255,215,0)";
  context.fillRect(0, 0, board.width, board.height);
  //snake food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }
  //snake head
  context.fillStyle = "	rgb(0,128,0)";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX > blockSize * cols ||
    snakeY > blockSize * rows
  ) {
    gameOver = true;
    alert("Gmae Over HHHHHHHHHHHHH");
  }
  for (i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Gmae Over HHHHHHHHHHHHH");
    }
  }
}
function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  }
}
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  console.log(foodX);
  console.log(foodY);
}
