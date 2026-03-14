const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("User list");
});

module.exports = router;



// Create a separate file for routes. 