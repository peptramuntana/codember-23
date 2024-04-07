// Import required modules
const path = require('path')
const fs = require('fs')

// Define the path to the file
const filePath = path.join(__dirname, 'files_quarantine.txt')

// Read the file
const fileContent = fs.readFileSync(filePath, 'utf-8')

// Split the file into lines
const structuredData = fileContent.split('\n')
const correctFiles = []

structuredData.forEach((item) => {
  const [name, checksum] = item.split('-')
  let checkData = ''
  for (let i = 0; i < name.length; i++) {
    const chars = name.split('').filter((char) => char === name[i])
    if (chars.length === 1) {
      checkData = checkData + chars[0]
    }
  }
  if (checkData === checksum) {
    correctFiles.push(name)
  }
})

console.log(correctFiles[32])
