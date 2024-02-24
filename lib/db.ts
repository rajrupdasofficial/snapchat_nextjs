import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;
export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log("Using cached Mongodb connection");
    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    cachedConnection = conn.connection;

    console.log("connected to mongodb");
    return cachedConnection;
  } catch (error) {
    throw error;
  }
}
