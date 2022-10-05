import Notiflix from 'notiflix';

const form = document.querySelector('form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');
let position = 1;
let timerId = null;
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
          resolve();
        } else {
          // Reject
          reject();
        }
      });

      promise
        .then(value => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
          delay = parseInt(delay) + parseInt(delayStep.value);
          position = parseInt(position) + 1;
          counter = counter - 1;
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          delay = parseInt(delay) + parseInt(delayStep.value);
          position = parseInt(position) + 1;
          counter = counter - 1;
        });
    }, delayStep.value);
  }, firstDelay.value);
}

// createPromise(2, 3000)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

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
