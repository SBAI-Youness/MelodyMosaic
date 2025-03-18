import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB with URI:", process.env.MONGODB_URI ? "URI exists" : "URI is missing")
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connected to MongoDB ${conn.connection.host}`)

    // Test the connection
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err)
    })
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected')
    })
    
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    process.exit(1)
  }
}