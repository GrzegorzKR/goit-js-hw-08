import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
// const emailField = document.querySelector('input');
// const messageField = document.querySelector('textarea');

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

// const inputValue = localStorage.getItem('feedback-form-state');
// const parsedInputValue = JSON.parse(inputValue);

// if (parsedInputValue) {
//   if (parsedInputValue !== '') {
//     emailField.value = parsedInputValue.email;
//   } else console.log('Error email');
// }

// if (parsedInputValue) {
//   if (parsedInputValue !== '') {
//     messageField.value = parsedInputValue.message;
//   }
// }
