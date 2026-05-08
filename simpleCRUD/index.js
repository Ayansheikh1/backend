const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());//middleware

let users = [
    {
        name : "Ayan"
    },
    {
        name : "Beast"
    }
];//array database


//get all users
app.get('/users' , (req,res)=>{
    res.json(users);
});


app.post('/users' , (req,res)=>{
    users.push(req.body);

    res.send("user added");


});

app.delete("/users/:id", (req,res)=>{
    users.splice(req.params.id ,1);
    res.send("user deleted");
})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

