const fs = require('fs');
// all of your methods for node are shown as asynchronous and synchronous
// always use the asynchronous (never synchronous)  --- best practice
const files = fs.readdirSync('./')
console.log(files,'files')


// const os = require('os');

// const osfreemem = os.freemem()

// console.log(`Free Memory: ${osfreemem}  *`)