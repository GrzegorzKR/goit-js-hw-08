import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
form.addEventListener('input', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log(`email:  ${email.value}, message  ${message.value}`);
}
console.log('test');
