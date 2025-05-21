const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// register

router.post("/register", async(req,res) =>{

    const {email,password} =req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
      return  res.status(400).json({msg:"Already Registered Email!"})
    }

    const hashed = await bcrypt.hash(password,10);
    const user = new User({email,password:hashed});
    await user.save();
    res.status(201).send("Registered");
});


// login

router.post("/login",async(req,res) => {
    const  {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({msg:"User not found !"})

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({msg:"Wrong password !"})  
        
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
    res.json({token}) ;
});



module.exports = router;