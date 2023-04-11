//global object not window in node
//__dirname - current directory 
//__filename - filename
// rquire - to import modules
//module - info about current file
// processs - info about the env and it's variable
console.log(__filename);
setInterval(()=>{
    console.log(__filename)
    console.log('__dirname: ', __dirname);
},3000)
