const fs = require("fs");
fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("err: ", err);
  }
    const first = result;
    fs.readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
      } 
        const second = result;
        fs.writeFile(
          "./content/result-async.txt",
          `here is the the result :  ${first} ,${second}`,(err,result)=>{
            if (err){
                console.log('err: ', err); }
          }
        );
      
    });
  
});

