
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"




dotenv.config()
const app = express()
const PORT = 5000


mongoose.connect(process.env.MONGO_URL, ()=>console.log("Conntected to mongoDB"));

app.use('/', (req, res) => {
  console.log("Backend is running!");
  res.send('Hello World!')
})




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})