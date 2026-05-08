const express = require("express");
const app = express();
const port =3000;




function logger(req,res,next){
console.log("request URL :", req.url);
console.log("Method :", req.method);
console.log("time: ", new Date());

next();
} // simple logger middleware


function checkToken(req,res,next){
 if(req.query.token === "123"){
    console.log("welcome user");
    next();
} else{
    console.log("access denied");
} } //custom middleware

app.use((req,res,next) =>{
    console.log("request received");
    next();
})

app.use(logger);



app.get('/',(req,res) =>{
    res.send("hello world!")
})//Simple Route


// app.use(checkToken); globally middleware

app.get('/about', checkToken,(req,res)=>{
    res.send("about page");
}) //apply middleware to specific route

app.get('/contact',(req,res)=>{
    res.send("contact page");
}) //multiple Routes


app.get('/user/:name',(req,res)=>{
    res.send(`Hello ${req.params.name}`);
}); //Route Parameter





app.get('/search',(req,res)=>{
    res.send(`Searching for ${req.query.product}`);
});//query Parameter

app.use(express.json());


app.post('/login',(req,res)=>{
    const { username , password } = req.body;

    if(username && password){
        res.send("login succesfully")
    }else{
        res.send("missing data")
    }
}) //post method 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
