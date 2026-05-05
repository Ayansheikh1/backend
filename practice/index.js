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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
