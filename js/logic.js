const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeX = 15, snakeY = 15;
let velocityX = 0, velocityY = 0;
const changeFoodPosition = () => {
	foodX= Math.floor(Math.random() * 30) + 1;
	foodY= Math.floor(Math.random() * 30) + 1;
	console.log(foodX);
	console.log(foodY);
}
const changeDirection = (e) => {
	if(e.key === "ArrowUp") {
		velocityX = 0;
		velocityY = -1;
	} else if(e.key === "ArrowDown") {
		velocityX = 0;
		velocityY = 1;
	} else if(e.key === "ArrowRight") {
		velocityX = 1;
		velocityY = 0;
	} else if(e.key === "ArrowLeft") {
		velocityX = -1;
		velocityY = 0;
	}
}
const initGame = () => {
	let htmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY}"></div>`;
	snakeX += velocityX;
	snakeY += velocityY;
	htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
	playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
initGame();
document.addEventListener("keydown", changeDirection);