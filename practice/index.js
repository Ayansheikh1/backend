const express = require("express");
const app = express();
const port =3000;


app.get('/',(req,res) =>{
    res.send("hello world!")
})//Simple Route

app.get('/about',(req,res)=>{
    res.send("about page");
})

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
