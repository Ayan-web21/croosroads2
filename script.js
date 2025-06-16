const player = document.getElementById("player");
const cars = document.querySelectorAll(".car");

let gridSize = 20;
let playerX = 190;
let playerY = 260;
let isGameOver = false;

document.addEventListener("keydown", (e) => {
  if (isGameOver) return;

  switch (e.key) {
    case "ArrowUp":
      if (playerY > 0) playerY -= gridSize;
      break;
    case "ArrowDown":
      if (playerY < 280 - gridSize) playerY += gridSize;
      break;
    case "ArrowLeft":
      if (playerX > 0) playerX -= gridSize;
      break;
    case "ArrowRight":
      if (playerX < 400 - gridSize) playerX += gridSize;
      break;
  }

  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

function moveCars() {
  cars.forEach((car) => {
    let x = parseFloat(car.style.left) || 0;
    x += 2.5 + Math.random(); // Speed varies a bit
    if (x > 400) x = -60;
    car.style.left = x + "px";

    // Collision detection
    const carRect = car.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    if (
      carRect.left < playerRect.right &&
      carRect.right > playerRect.left &&
      carRect.top < playerRect.bottom &&
      carRect.bottom > playerRect.top
    ) {
      alert("💥 You got hit!");
      isGameOver = true;
    }
  });

  if (!isGameOver) requestAnimationFrame(moveCars);
}
moveCars();

