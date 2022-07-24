// CommonJS, every file is module (by defult)
// Modules - encapsulated code (only shere minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names)

sayHi('regar')
sayHi(names.jon)
sayHi(names.snow)

