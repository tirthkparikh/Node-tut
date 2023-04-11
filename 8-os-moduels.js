const os = require('os');

//info about current user

const user = os.userInfo();
console.log('user: ', user);

//method returns system up time
console.log(`the system up time is ${os.uptime()}`)

const currentOs ={
    name : os.type(),
    relase: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log('currentOs: ', currentOs);

