const os = require('os')

const user = os.userInfo()

// return user info
console.log(user)

//method retunrs systems uptime in s
console.log(`system uptime ${os.uptime()} s`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)