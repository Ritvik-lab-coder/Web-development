const scriptURL = 'https://script.google.com/macros/s/AKfycby0jlv2lP5uzCAwvBx9UcIcPzQz8Y1HSLvBlC9cBmNZMlgo542z_Em2f-avXRqqq0E_/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank You For Subscribing!'
            setTimeout(function() {
                msg.innerHTML = ''
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})