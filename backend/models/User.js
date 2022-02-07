import  mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    },
    password: {
        type: String,
        max: 1024,
        min: 8,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


export default mongoose.model("User", userSchema);