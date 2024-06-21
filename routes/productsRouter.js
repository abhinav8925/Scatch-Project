const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey from Products");
})
module.exports = router;