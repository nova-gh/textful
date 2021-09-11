import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export const dbConnect = async () => {
  if (!isConnected) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  }
};
