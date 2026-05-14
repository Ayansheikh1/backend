const express = require("express");
 
const router = express.Router();

const User = require("../models/userModel")


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

});

//create new user
router.post('/users', async (req,res) =>{
    try {
      const{name, age, weight} = req.body;
      const newUser = new User({name, age, weight});
      await newUser.save();//save to model

      res.status(200).json({
        success:true,
        user:newUser
      })
      
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }

});


//update user

router.put('/users/:id',async(req,res) =>{
    const{id} = req.params;
    const{name,age,weight} = req.body;

    try{
        const updatedUser = User.findByIdAndUpdate(id,{name,age,weight});

        if(!updatedUser){
            res.json({
                message: "user not found..."
            });
            
        }

        res.status(200).json({
            success:true,
            user:updatedUser
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
})






module.exports = router;