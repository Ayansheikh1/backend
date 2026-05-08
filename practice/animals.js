const express = require("express");

const router = express.Router();


//animal
router.get('/', (req,res) =>{
    res.send("All animals");
});


router.get('/dog', (req,res) =>{
    res.send("All dog");
});

module.exports = router;

