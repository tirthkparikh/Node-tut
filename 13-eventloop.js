console.log("first task start");
setTimeout(()=>{
console.log("first tsask is completed")
},0)
console.log("second task start");

///setinterval needs to be killed

const third= setInterval(()=>{
    console.log("third task started")
},0)
console.log("hi")

const stop=()=>{
 clearInterval(third)
}
stop();