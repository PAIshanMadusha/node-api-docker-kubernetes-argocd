import mongoose from "mongoose";

// Below is the MongoDB connection URI for local development
// e.g., "mongodb://localhost:27017/notebook"
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongo:27017/notebook"; // mongo is the service name in docker-compose.yml

// Function to connect to MongoDB with retry logic
async function connectDB(retries = 10, delay = 5000) {
  while (retries) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB Connected Successfully!");
      return;
    } catch (error) {
      retries--;
      console.log(`MongoDB connection failed, Retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("MongoDB connection failed after maximum retries!");
}

export default connectDB;
