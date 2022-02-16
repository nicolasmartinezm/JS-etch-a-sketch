const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeBtn = document.querySelector(".shake");
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const MOVE_AMOUNT = 80;
let hue = 0;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 50;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
ctx.beginPath();

function draw({ key }) {
  ctx.moveTo(x, y);
  hue += 20;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    draw({ key: e.key });
    e.preventDefault();
  }
}
function shakeCanva() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener("animationend", function () {
    canvas.classList.remove("shake");
  });
}
shakeBtn.addEventListener("click", shakeCanva);
window.addEventListener("keydown", handleKey);
