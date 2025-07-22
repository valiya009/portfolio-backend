import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const Upload = mongoose.model("Upload", uploadSchema);
export default Upload;
