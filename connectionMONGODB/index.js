const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db");
const users = require("./routes/users");


app.use(express.json());

//connect to database
connectDB();


app.use('/api',users);

app.get('/', (req,res)=>{
    console.log("we are inside the handler");
    res.send("welcome dosto!");
})

app.listen(port,() =>{
 console.log("server running");
})