// importing the css file
import './style.css'

// sections for web pages
import './sections/table'
import './sections/helloworld'
import './sections/policies'
import './sections/form'

const date = document.getElementById('date')
const nameInput = document.getElementById('name')
const moduleCodeInput = document.getElementById('module_code')
const form = document.getElementById('form')
const errorMessage = document.getElementById('error')

date.valueAsDate = new Date()

form.addEventListener('submit', (event) => {
  let messages = []
  const nameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  const moduleCodeRegex = /^[A-Z][a-z][2-9]{3}$/

  if (nameRegex.test(nameInput.value)) {
    messages.push('Please do not use special characters in your name.')
  }

  if (
    moduleCodeInput.value.length > 0 &&
    !moduleCodeRegex.test(moduleCodeInput.value)
  ) {
    messages.push('Please enter a valid module code.')
  }

  if (messages.length > 0) {
    event.preventDefault()
    alert(messages.join('\n'))
  }
})
