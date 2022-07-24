const path = require('path')

console.log(path.sep)

// return correct file path
const filePath = path.join('/content', 'subfolder', 'test', 'text.js')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test', 'text.js')

console.log(absolute)