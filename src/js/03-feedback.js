import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');

let elements = {};

const inputCatcher = event => {
  elements[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(elements));
};

const submitHandler = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    alert('Proszę wypełnić wszystkie pola formularza');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('input', throttle(inputCatcher, 500));
form.addEventListener('submit', submitHandler);
