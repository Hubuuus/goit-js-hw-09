// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let selectedDate = new Date();
let actualTime = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < actualTime.getTime()) {
      // window.alert('Please choose a date in the future');
      Notify.warning('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
    } else {
      Notify.success('The chosen date is correct');
      startBtn.removeAttribute('disabled');
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr(dateTimePicker, options);

const addZero = value => {
  return value.padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  actualTime = new Date();

  dataDays.innerHTML = addZero(String(days));
  dataHours.innerHTML = addZero(String(hours));
  dataMinutes.innerHTML = addZero(String(minutes));
  dataSeconds.innerHTML = addZero(String(seconds));
}

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  const timer = setInterval(() => {
    let timeDifferential = selectedDate.getTime() - actualTime.getTime();

    if (timeDifferential > 0) {
      convertMs(timeDifferential);
    } else {
      clearInterval(timer);
      Notify.success('Timer has finished!');
    }
  }, 1000);
});
