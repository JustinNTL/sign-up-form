const firstName = document.querySelector('[data-first-name]');
const lastName = document.querySelector('[data-last-name]');
const email = document.querySelector('[data-email]');
const phone = document.querySelector('[data-phone]');
const password1 = document.querySelector('[data-pw-1]');
const password2 = document.querySelector('[data-pw-2]'); 
const submitButton = document.querySelector('[data-btn]');

const fnReqCheck = () => {
   if (firstName.value === '') {
      document.documentElement.style.setProperty('--fnReqVisibility', 'visible');
      firstName.classList.add('input-error');
	 }  else {
			document.documentElement.style.setProperty('--fnReqVisibility', 'hidden');
			firstName.classList.remove('input-error');
   }
}

const lnReqCheck = () => {
   if (lastName.value === '') {
      document.documentElement.style.setProperty('--lnReqVisibility', 'visible');
      lastName.classList.add('input-error');
   } 	else {
      document.documentElement.style.setProperty('--lnReqVisibility', 'hidden');
      lastName.classList.remove('input-error');
   }
}

const elReqCheck = () => {
   if (email.value === '') {
      document.documentElement.style.setProperty('--elReqVisibility', 'visible');
      email.classList.add('input-error');
   } 	else {
      document.documentElement.style.setProperty('--elReqVisibility', 'hidden');
      email.classList.remove('input-error');
   }
}

const phReqCheck = () => {
   if (phone.value === '') {
      document.documentElement.style.setProperty('--phReqVisibility', 'visible');
      phone.classList.add('input-error');
   } 	else {
      document.documentElement.style.setProperty('--phReqVisibility', 'hidden');
      phone.classList.remove('input-error');
   }
}

/* Notice double quotes on '"* Required"' to change the custom css string variable */

const pwReqCheck = () => {
   if (password1.value === '') {
      document.documentElement.style.setProperty('--pwMatch', '"* Required"');
      document.documentElement.style.setProperty('--pwVisibility', 'visible');
      password1.classList.add('input-error');
   } 	else {
      document.documentElement.style.setProperty('--pwMatch', '"* Passwords do not match"');
   }
}

const pwConfReqCheck = () => {
   if (password2.value === '') {
      document.documentElement.style.setProperty('--confPwVisibility', 'visible');
      password2.classList.add('input-error');
   } 	else {
			document.documentElement.style.setProperty('--confPwVisibility', 'hidden');
	 }
}

const passwordMatch = () => {
   if (password1.value !== '' && password2.value !== '' && password1.value !== password2.value) {
      document.documentElement.style.setProperty('--pwVisibility', 'visible');
      password1.classList.add('input-error');
      password2.classList.add('input-error');
   } 	else {
      document.documentElement.style.setProperty('--pwVisibility', 'hidden');
      password1.classList.remove('input-error');
      password2.classList.remove('input-error');
   }
}

/* Show error on first submit, but remove during user fix */

submitButton.addEventListener('click', () => {
  fnReqCheck();
	lnReqCheck();
	elReqCheck();
	phReqCheck();
	pwReqCheck();
	pwConfReqCheck();
});

firstName.addEventListener('keyup', fnReqCheck);

lastName.addEventListener('keyup', lnReqCheck);

email.addEventListener('keyup', elReqCheck);

phone.addEventListener('keyup', phReqCheck);

password1.addEventListener('keyup', () => {
  passwordMatch();
	pwReqCheck();
});

password2.addEventListener('keyup', () => {
	passwordMatch();
	pwConfReqCheck();
});

/* Other "less readable" way to call method on event

password1.onkeyup = passwordMatch;
password2.onkeyup = passwordMatch; 

Notice the difference of 'keyup' vs 'onkeyup' */
