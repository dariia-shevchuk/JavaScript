import isEmail from 'validator/lib/isEmail';
import * as passwordValidator from 'password-validator';

const emailEl = document.getElementById('email') as HTMLInputElement;
const passEl = document.getElementById('pass') as HTMLInputElement;
const passRepeatEl = document.getElementById('pass_repeat') as HTMLInputElement;
const formEl = document.getElementById('new_account_form') as HTMLFormElement;
// Create a schema
var schema = new passwordValidator();
// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

if (formEl && emailEl && passEl && passRepeatEl) {
    formEl.addEventListener('submit', (event) => {
        var emailCheck = isEmail(emailEl.value);
        var passCheck = schema.validate(passEl.value);
        var passRepCheck = schema.validate(passRepeatEl.value);
        var SamePass = passEl.value == passRepeatEl.value;
        console.log(emailCheck);
        console.log(passCheck);
        console.log(passRepCheck);
        console.log("Is good sign up");
        console.log(emailCheck && passCheck && passRepCheck && SamePass);
        event.preventDefault();
        return false;
    });   
}


