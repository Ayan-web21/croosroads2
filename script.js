const player = document.getElementById('player');
const cars = document.querySelectorAll('.car');
let playerY = 0;
let isGameOver = false;

// Move player with arrows
document.addEventListener('keydown', (e) => {
  if (isGameOver) return;
  if (e.key === 'ArrowUp') playerY += 20;
  if (e.key === 'ArrowDown' && playerY > 0) playerY -= 20;
  player.style.bottom = `${playerY}px`;
});

// Animate cars
function moveCars() {
  cars.forEach(car => {
    let x = parseInt(car.style.left || 0);
    x += 2 + Math.random() * 2;
    if (x > 400) x = -60;
    car.style.left = x + 'px';

    // Collision detection
    const carRect = car.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    if (
      carRect.left < playerRect.right &&
      carRect.right > playerRect.left &&
      carRect.top < playerRect.bottom &&
      carRect.bottom > playerRect.top
    ) {
      alert('💥 Game Over!');
      isGameOver = true;
    }
  });

  if (!isGameOver) requestAnimationFrame(moveCars);
}
moveCars();
