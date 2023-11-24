// Import required modules
const path = require('path')
const fs = require('fs')

// Define the path to the file
const filePath = path.join(__dirname, 'encryption_policies.txt')

// Read the file and split it into lines
const fileContent = fs.readFileSync(filePath, 'utf-8').split('\n')

// Initialize an empty array to hold the structured data
const structuredData = []

// Loop over each line in the file
fileContent.forEach((item) => {
  // Split the line into parts
  const [range, letterWithColon, password] = item.split(' ')

  // Split the range into minimum and maximum
  const [min, max] = range.split('-')

  // Remove the colon from the letter
  const letter = letterWithColon[0].replace(':', '')

  // Push an object representing the line to the structuredData array, this object has the following structure
  // { password: 'password', letter: 'a', min: 1, max: 3 }
  structuredData.push({
    password,
    letter,
    min: parseInt(min, 10),
    max: parseInt(max, 10)
  })
})

// Define a function to check if a password is valid
function isPasswordValid ({ password, letter, min, max }) {
  // Count the number of times the letter appears in the password
  const count = Array.from(password).filter((char) => char === letter).length

  // Return true if the count is within the range, false otherwise
  return count >= min && count <= max
}

// Filter the structuredData array to get the invalid entries
const wrongEntries = structuredData.filter(entry => !isPasswordValid(entry))

// Log the 42nd for the challenge
console.log(wrongEntries[41])
// Log the 12th for the secret bonus challenge
console.log(wrongEntries[12])
