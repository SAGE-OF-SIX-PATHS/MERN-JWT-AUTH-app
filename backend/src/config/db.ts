import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

// MongoDB connection function

export const connectToDataBase = async () => {
          try {
                    await mongoose.connect(MONGO_URI);
                    console.log("MongoDB connected successfully");
          } catch (error) {
                    console.log("MongoDB connection failed", error);
                    process.exit(1); // Exit process with failure
          }
}