const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

// start button
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.classList.toggle('disabled-btn');
  stopBtn.classList.toggle('disabled-btn');
});

//stop button
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.classList.toggle('disabled-btn');
  stopBtn.classList.toggle('disabled-btn');
});
