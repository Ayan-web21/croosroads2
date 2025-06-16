onst player = document.getElementById("player");
const cars = document.querySelectorAll(".car");

let playerX = 190;
let playerY = 260;
let isGameOver = false;

document.addEventListener("keydown", (e) => {
  if (isGameOver) return;

  if (e.key === "ArrowUp" && playerY > 0) playerY -= 20;
  if (e.key === "ArrowDown" && playerY < 280 - 20) playerY += 20;
  if (e.key === "ArrowLeft" && playerX > 0) playerX -= 20;
  if (e.key === "ArrowRight" && playerX < 400 - 20) playerX += 20;

  player.style.left = playerX + "px";
  player.style.top = playerY + "px";
});

function moveCars() {
  cars.forEach((car) => {
    let x = parseFloat(car.style.left) || 0;
    x += 3 + Math.random() * 1.5;
    if (x > 400) x = -60;
    car.style.left = x + "px";

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
