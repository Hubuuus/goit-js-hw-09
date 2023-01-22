import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  let valueDelay = parseInt(delay.value);
  setTimeout(() => {
    for (let i = 0; i < amount.value; i++) {
      setTimeout(() => {
        createPromise(i + 1, valueDelay), parseInt(step.value);
        valueDelay += parseInt(step.value);
      }, parseInt(step.value) * i);
    }
  }, parseInt(delay.value));
});
