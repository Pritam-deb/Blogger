import  mongoose  from "mongoose";


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


export default mongoose.model("Post", postSchema);