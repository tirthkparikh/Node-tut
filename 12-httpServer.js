const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.write("hello tirth")
    }
    else if (req.url === "/about"){
        res.write("hello sonali")

    }
    else{
        res.write("error")
    }
    res.end()
    
})
server.listen(5000)