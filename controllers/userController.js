const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const {fullName, email, phone, password } = req.body;
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400).json({
      error: "User already exists"
    })
  }

  const newUser = await User.create({fullName, email, phone, password})

  if(newUser) {
    res.status(201).json({
      message: "User created successfully"
    })
  }else{
    res.status(500).json({
      error: "Invalid user data"
    })
  }

}





module.exports = {registerUser}