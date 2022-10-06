import Notiflix from 'notiflix';

const form = document.querySelector('form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

let timerId = null;
let position = 1;
let counter = 0;

function createPromise(position, delay) {
  counter = amount.value - 1;
  delay = firstDelay.value;

  setTimeout(() => {
    timerId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;

      if (counter === 0) {
        clearInterval(timerId);
        submitBtn.classList.remove('disabled-btn');
      }

      const promise = new Promise((resolve, reject) => {
        if (shouldResolve) {
          // Fulfill
          resolve({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
      });

      const nextStep = () => {
        delay = parseInt(delay) + parseInt(delayStep.value);
        position += 1;
        counter -= 1;
      };

      promise
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
          nextStep();
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          nextStep();
        });
    }, delayStep.value);
  }, firstDelay.value);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  submitBtn.classList.add('disabled-btn');
  createPromise(position, delayStep.value);
});

form.addEventListener('input', checkValue);

function checkValue(e) {
  // if all fields are filled, the button will be activated
  if (firstDelay.value > 0 && delayStep.value > 0 && amount.value > 0) {
    submitBtn.classList.remove('disabled-btn');
  }
}
