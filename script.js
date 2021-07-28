let mail = document.getElementById('email')
let error = document.querySelector('.error')

let regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

mail.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.style.display = 'block'
    mail.style.border = '2px solid #ff2965'
  } else {
    error.style.display = 'none'
  }
})
