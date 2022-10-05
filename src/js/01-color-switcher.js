const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// stopBtn.disabled = true;
let timerId = null;

// start button
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  //startBtn.disabled = true;
  //stopBtn.disabled = false;

  startBtn.classList.add('disabled-btn');
  stopBtn.classList.remove('disabled-btn');
});

//stop button
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  //stopBtn.disabled = true;
  //startBtn.disabled = false;

  stopBtn.classList.add('disabled-btn');
  startBtn.classList.remove('disabled-btn');
});
