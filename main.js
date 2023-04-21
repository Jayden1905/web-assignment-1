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

window.onload = showDate

function resetForm() {
  document.getElementById('form').reset()
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
  var now = new Date()

  // Define arrays for month names and day names
  var months = [
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
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Format the date string
  var dateString =
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
