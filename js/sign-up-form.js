
const firstName = document.querySelector('[data-first-name]');
const lastName = document.querySelector('[data-last-name]');
const email = document.querySelector('[data-email]');
const phone = document.querySelector('[data-phone]');
const password1 = document.querySelector('[data-pw-1]');
const password2 = document.querySelector('[data-pw-2]'); 
const submitButton = document.querySelector('button[type=submit]')
const form = document.querySelector('[data-form]');

/* use .input-error and add as a class and toggle visibility on .req-check::after */

const requiredCheck = () => {
   if (firstName.value == '') {
      document.documentElement.style.setProperty('--reqVisibility', 'visible');

   }
}

const passwordMatch = () => {
   if (password1.value !== '' && password2.value !== '' && password1.value !== password2.value) {
      document.documentElement.style.setProperty('--pwVisibility', 'visible');
      password1.classList.add('input-error');
      password2.classList.add('input-error');
   } else {
      document.documentElement.style.setProperty('--pwVisibility', 'hidden');
      password1.classList.remove('input-error');
      password2.classList.remove('input-error');
   }
}

password1.onkeyup = passwordMatch;
password2.onkeyup = passwordMatch;

form.onsubmit = requiredCheck;
