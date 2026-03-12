const express = require('express')
const app = express()
const port = 3000

const users = require("./routes/user")

//simple logger mddleware
function logger(req,res,next){
  console.log("Method: ",req.method);
  console.log("URL:",req.url);
  console.log("Time: ", new Date());

  next();

}
//Understand middleware applied to specific routes.

function checkKey(req,res,next){
  if(req.query.key === "123"){
    next();
  }
  else{
    res.send("access denied");
  }
}


app.use(logger);

app.get('/', (req,res)=>{
  res.send("Home Page");
})

app.get('/admin',checkKey, (req,res)=>{
  res.send("admin Page")
})

//routes response json
app.get('/student', (req,res) => {
  res.send([
    { id:1, name: "ayan" },
    { id:2, name: "ashar" }
  ])
})


//
app.use('/users', users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


