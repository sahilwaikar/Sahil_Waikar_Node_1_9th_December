import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('blog', blogSchema);
export { Blog };