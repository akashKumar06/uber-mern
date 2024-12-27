import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Database connected\nDB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    throw error;
  }
}

export default connectDB;
