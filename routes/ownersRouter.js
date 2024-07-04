const express = require('express');
const router = express.Router();
const ownermodel = require("../models/ownermodel");

router.get("/",(req,res)=>{
    res.send("Hey from Owner");
})

if(process.env === "development"){
    console.log(Hey);
}
router.post("/create",(req,res)=>{

})



module.exports = router;