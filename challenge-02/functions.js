export function compiler () {
  const button = document.querySelector('.compiler button')
  if (button) {
    button.addEventListener('click', (event) => {
      const input = document.querySelector('.compiler input')
      const output = document.querySelector('.compiler .output')

      if (checkChars(input)) {
        const inputArray = input.value.split('')
        let number = 0
        let outputText = ''
        inputArray.forEach((char) => {
          if (char === '#') {
            number++
          } else if (char === '@') {
            number--
          } else if (char === '*') {
            number *= number
          } else if (char === '&') {
            outputText += number.toString()
          }
        })
        output.textContent = outputText
        console.log(outputText)
      } else {
        output.textContent = ''
      }
    })
  }
}

export function validateInput (input) {
  const inputElement = document.querySelector('.compiler input')

  function handleInput () {
    const isValid = checkChars(this)
    const validationMessage = document.querySelector('.validation-message')
    if (!isValid) {
      validationMessage.textContent = "Only '#' '@' '*' or '&' are allowed"
    } else {
      validationMessage.textContent = ''
    }
  }

  inputElement.addEventListener('input', handleInput)
  inputElement.addEventListener('keyup', handleInput)
}

export function checkChars (input) {
  const allowedChars = /^[#@*&]+$/
  let isValid = false
  allowedChars.test(input.value) || input.value === '' ? isValid = true : isValid = false
  return isValid
}
