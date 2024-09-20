let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');
let form = document.querySelector('#From');

function showError(input, message) {
    const FormControl = input.parentElement;
    FormControl.className = 'form-control error';
    const small = FormControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const FormControl = input.parentElement;
    FormControl.className = 'from-control success';
}

function checkMail(input) {
    const RegEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(RegEx.test(input.value)){
        showSuccess(input);
    } else {
        showError(input, 'Email Is Not Valid')
    }
}

function checkInputLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function matchPassword(password1, password2) {
    if(password1.value !== password2.value) {
        showError(password2, "Password doesn't match");
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    checkInputLength(username, 3, 20);
    checkInputLength(password, 6, 30);
    checkMail(email);
    matchPassword(password, password2);
})