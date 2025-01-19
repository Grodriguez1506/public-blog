import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Post", postSchema);
