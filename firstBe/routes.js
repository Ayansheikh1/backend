const express = require('express');
const app = express();

port =3000;

app.get('/', (req,res)=>{
    res.send('welcome to my node.js server')
})

app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/contact', (req,res)=>{
    res.send('Contact us at example@email.com')
})

app.listen(3000,()=>{
    console.log(`runnning on ${port}`)
})
