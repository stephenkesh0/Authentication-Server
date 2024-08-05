const express = require("express")
const app = express()
const port = 8000
const userRoute = require("./routes/userRoutes")
const connectDb = require("./config/db")
connectDb()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
  res.json({message: "Welcome to my backend server"})
})

app.use("/api", userRoute)

app.listen(port, () => {
  console.log(`Server started successfully on http://localhost:${port}/api`);
})