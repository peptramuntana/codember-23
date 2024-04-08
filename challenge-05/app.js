// Import required modules
const path = require('path')
const fs = require('fs')

// Define the path to the file
const filePath = path.join(__dirname, 'database_attacked.txt')

// Read the file
const fileContent = fs.readFileSync(filePath, 'utf-8')

// Split the file into lines
const structuredData = fileContent.split('\r\n')

let output = ''

structuredData.forEach((line, index) => {
  const [id, username, email, age, location] = line.split(',')

  let valid = true

  // Check if the id is alphanumeric
  for (let i = 0; i < id.length; i++) {
    const charCode = id.charCodeAt(i)
    if (!(charCode > 47 && charCode < 58) && // numeric (0-9)
          !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
          !(charCode > 96 && charCode < 123)) { // lower alpha (a-z)
      valid = false
      break
    }
  }

  // Check if the username is alphanumeric
  for (let i = 0; i < username.length; i++) {
    const charCode = username.charCodeAt(i)
    if (!(charCode > 47 && charCode < 58) && // numeric (0-9)
              !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
              !(charCode > 96 && charCode < 123)) { // lower alpha (a-z)
      valid = false
      break
    }
  }

  // Check if the email is valid (contains only one '@' and has '.com' at the end)
  const emailParts = email.split('@')
  if (emailParts.length !== 2) {
    valid = false
  }

  if (emailParts[1]) {
    const domainParts = emailParts[1].split('.')
    if (domainParts.length !== 2) {
      valid = false
    }

    if (domainParts[1] !== 'com') {
      valid = false
    }
  } else {
    valid = false
  }

  // Check if the age is a numberp
  if (isNaN(parseInt(age)) && age !== '') {
    valid = false
  }

  // Check if the location is a string and is not empty
  if (typeof location !== 'string' && location !== '') {
    valid = false
  }

  if (!valid) {
    output += username.charAt(0)
  }
})

console.log(output)
