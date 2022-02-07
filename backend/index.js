//IMPORTING LIBRARIES
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"


//Route
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"


dotenv.config()

const app = express()
const PORT = 5000

mongoose.connect(process.env.MONGO_URL, ()=>console.log("Conntected to mongoDB"));

//MIDDLEWARE
app.use(bodyParser.json())
app.use('/api', authRoute);
app.use('/api/users', userRoute)

app.get('/', (req, res) => {
  console.log("Backend is running!");
  res.send('Hello World!')
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})