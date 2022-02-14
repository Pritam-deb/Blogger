//IMPORTING LIBRARIES
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

//Route
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";

dotenv.config();
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Conntected to mongoDB")
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).send("File has been uploaded");
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => {
  console.log("Backend is running!");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
