import Mongoose, { Schema } from "mongoose";

type Video = {
  title: string;
  description: string;
  category: string;
};

const videoSchema = new Schema({
  title: String,
  description: String,
  category: String,
});

export default Mongoose.model<Video>("Video", videoSchema);
