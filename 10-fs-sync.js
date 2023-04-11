const fs = require('fs');
const first = fs.readFileSync('./content/first.txt','utf-8');
console.log('first: ', first);
const second = fs.readFileSync('./content/second.txt','utf-8');
console.log('second: ', second);

fs.writeFileSync('./content/result-sync.txt',`here is the the result :  ${first} ,${second}`,{flag: 'a'});