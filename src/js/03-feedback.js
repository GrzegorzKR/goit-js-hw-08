import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');

const inputCatcher = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
};

form.addEventListener('input', throttle(inputCatcher, 500));

const inputValue = localStorage.getItem('feedback-form-state');
const parsedInputValue = JSON.parse(inputValue);

if (parsedInputValue) {
  if (parsedInputValue !== '') {
    emailField.value = parsedInputValue.email;
  }
}

if (parsedInputValue) {
  if (parsedInputValue !== '') {
    messageField.value = parsedInputValue.message;
  }
}

const submitHandler = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('submit', submitHandler);
