const mongoose = require("mongoose")
const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://Stephen:mrworldwide@stephen.mxjusdt.mongodb.net/")
    console.log("mongodb connected successfully" + connect.connection.host);
  } catch (error) {
    console.log(error);
  }
}




module.exports = connectDb