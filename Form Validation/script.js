const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
function validateName() {
    const name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = '*Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = '*Enter full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    const phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = '*Phone No. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '*Phone No. must be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = '*Phone No. must only have digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    const email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = '*Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '*Enter a valid email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    const message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;
    if (message.length == 0) {
        messageError.innerHTML = '*Message is required';
        return false;
    }
    if (left > 0) {
        messageError.innerHTML = '*' + left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = '*Please fill the required details';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000)
        return false;
    }
    submitError.style.color = 'seagreen';
    submitError.innerHTML = '*Form submitted successfully!';
}