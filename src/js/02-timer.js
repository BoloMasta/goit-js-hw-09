import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dateNow = new Date();
let distance = 0;

startBtn.disabled = true;

//flatpickr
const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  allowInput: false,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(dateNow);

    if (selectedDates[0].getTime() <= dateNow.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      distance = convertMs(selectedDates[0].getTime() - dateNow.getTime());

      console.log(distance);

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
