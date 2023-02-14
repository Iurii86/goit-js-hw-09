const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let changeBodyColor = null;



startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    changeBodyColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
};

function onStopBtn() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(changeBodyColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}