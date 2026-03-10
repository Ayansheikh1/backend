//including express module and instialising an app

const express = require('express');
const app = express();

//variable that stores the port number
const port = 3000;

const birds = require('./birds')



//start your app 
app.get('/',(req,res)=>{
    res.send("heloo");
})

app.post('/items', (req,res)=>{
    res.send("post request");
    console.log("post req");
})

app.use('/birds', birds);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



