import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let currentDate = new Date();
let futureDate = 0;
let distance = 0;
// startBtn.disabled = true;
let timerId = null;

//flatpickr
const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  // allowInput: false,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // checking the indicated date
    if (selectedDates[0].getTime() <= currentDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      //startBtn.disabled = false;
      startBtn.classList.remove('disabled-btn');
      futureDate = selectedDates[0];
    }
  },
};

flatpickr(inputDate, options);

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

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  // Adding "0" in front of the single-digit number
  return value.toString().padStart(2, '0');
}

const renderDate = () => {
  //checking the current date and calculating the difference
  currentDate = new Date();
  distance = convertMs(futureDate.getTime() - currentDate.getTime());

  // the countdown ends at 0: 0: 0: 0
  if (
    distance.days === 0 &&
    distance.hours === 0 &&
    distance.minutes === 0 &&
    distance.seconds === 0
  ) {
    clearInterval(timerId);
  }

  // counter rendering
  document.querySelector('[data-days]').innerHTML = addLeadingZero(
    distance.days
  );
  document.querySelector('[data-hours]').innerHTML = addLeadingZero(
    distance.hours
  );
  document.querySelector('[data-minutes]').innerHTML = addLeadingZero(
    distance.minutes
  );
  document.querySelector('[data-seconds]').innerHTML = addLeadingZero(
    distance.seconds
  );
};

startBtn.addEventListener('click', () => {
  startBtn.classList.add('disabled-btn');
  // first function call without delay 1s
  renderDate();
  // interval setting
  timerId = setInterval(() => {
    renderDate();
  }, 1000);
});


