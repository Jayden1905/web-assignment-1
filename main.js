// importing the css file
import './style.css'

// sections for web pages
import './sections/table'
import './sections/helloworld'
import './sections/policies'
import './sections/form'

const message = document.getElementById('message')
const find = document.getElementById('find')
const replace = document.getElementById('replace')
const changeBtn = document.getElementById('change')
const changeCount = document.getElementById('changeCount')
const resetBtn = document.getElementById('reset-btn')
const userInput = document.getElementById('username')
const moduleInput = document.getElementById('module')
const userError = document.getElementById('error-message-username')
const moduleError = document.getElementById('error-message-module-code')
const form = document.getElementById('form')

window.onload = showDate

function resetForm() {
  document.getElementById('form').reset()
  userError.innerHTML = ''
  moduleError.innerHTML = ''
  setTimeout(function () {
    showDate()
  }, 0)
}

resetBtn.addEventListener('click', () => {
  resetForm()
})

//disable / enable inputs
find.addEventListener('keyup', () => {
  if (find.value != '') {
    replace.disabled = false
    changeBtn.disabled = false
  }
  if (find.value == '') {
    replace.disabled = true
    changeBtn.disabled = true
  }
})

//find and replace function
changeBtn.addEventListener('click', () => {
  let replacedText = message.value.replaceAll(find.value, replace.value)
  let count = (message.value.match(new RegExp(find.value, 'g')) || []).length
  message.value = replacedText
  changeCount.textContent = count + ' replacements made.'
})

function showDate() {
  // Get the current date
  const now = new Date()

  // Define arrays for month names and day names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Format the date string
  const dateString =
    months[now.getMonth()] +
    ' ' +
    now.getDate() +
    ', ' +
    now.getFullYear() +
    ' ' +
    days[now.getDay()] +
    ' ' +
    now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })

  // Set the textbox value to the formatted date
  document.getElementById('Date').value = dateString
}

userInput.addEventListener('blur', (e) => {
  const username = e.target.value

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    userError.innerHTML = 'Username must not contain special characters.'
  } else {
    userError.innerHTML = ''
  }
})

moduleInput.addEventListener('blur', (e) => {
  const moduleCode = e.target.value

  if (!/^[A-Z][a-z][2-9]{3}$/.test(moduleCode) && moduleCode != '') {
    moduleError.innerHTML = 'Invalid module code.'
  } else {
    moduleError.innerHTML = ''
  }
})

form.addEventListener('submit', (e) => {
  if (userError.innerHTML != '' || moduleError.innerHTML != '') {
    e.preventDefault()
  }
})
