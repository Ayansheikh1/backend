const express = require('express')
const app = express()
const port = 3000

function logger(req,res,next){
  console.log("Method: ",req.method);
  console.log("URL:",req.url);
  console.log("Time: ", new Date());

  next();

}

app.use(logger);

app.get('/', (req,res)=>{
  res.send("Home Page");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
