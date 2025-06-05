import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoBd connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log("erro connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
