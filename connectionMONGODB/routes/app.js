const express = require("express");
 
const router = express.Router;

const User = reqiure("../models/userModel")


//routes

//CRUD operation


//read/view

router.get('/users', async (req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }

})






module.exports = router;