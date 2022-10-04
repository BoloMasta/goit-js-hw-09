import Notiflix from 'notiflix';

const form = document.querySelector('form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
let position = 1;
let timerId = null;

function createPromise(position, delay) {
  setTimeout(() => {
    timerId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;

      const promise = new Promise((resolve, reject) => {
        if (shouldResolve) {
          // Fulfill
          resolve(
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            ),
            (delay = parseInt(delay) + parseInt(delayStep.value))
          );
        } else {
          // Reject
          reject(
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            ),
            (delay = parseInt(delay) + parseInt(delayStep.value))
          );
        }
      });
    }, delayStep.value);
  }, firstDelay.value);
}
// const promise = new Promise((resolve, reject) => {
//   if (zakończono_operacje_pozytywnie) {
//       resolve("Wszystko ok 😁"); //kończę i zwracam dane
//   } else {
//       reject("Nie jest ok 😥"); //kończę i zwracam błąd
//   }
// });
//createPromise();

//  createPromise(2, 1500)
//    .then(({ position, delay }) => {
//      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//    })
//    .catch(({ position, delay }) => {
//      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//    });

form.addEventListener('submit', event => {
  event.preventDefault();
  createPromise(amount.value, delayStep.value);
});
