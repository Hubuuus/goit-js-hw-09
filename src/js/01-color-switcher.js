const startBtn = document.querySelector('.data-start');
const stopBtn = document.querySelector('.data-stop');
let timerId = null;
const backgraound = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  console.log(`Interval with id ${timerId} has started!`);
  timerId = setInterval(() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    console.log(`Backgraound color is!  ${getRandomHexColor()}`);
    backgraound.setAttribute(
      'style',
      `background-color: ${getRandomHexColor()}`
    );
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
});
