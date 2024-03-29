const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const authRouter = express.Router();
const bcrypt = require("bcryptjs")

authRouter.post("/api/signup", async(req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser =await User.findOne({email});
  
    if(existingUser){
      return res.status(400).json({
        msg:"User with same email already exists"
      })
    }
    const hashedPassword = await bcrypt.hash(password,8);

  
    let user = new User({
      email,
      password:hashedPassword,
      name,
    })
  
    user = await user.save();
    res.json(user);
  
  } catch (error) {
    res.status(500).json({error:error.message});
  }
 
});

module.exports = authRouter;
