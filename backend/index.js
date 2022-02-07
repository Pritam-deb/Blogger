
import express from "express"
const app = express()
const PORT = 5000

app.use('/', (req, res) => {
  console.log("Backend is running!");
  res.send('Hello World!')
})




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})