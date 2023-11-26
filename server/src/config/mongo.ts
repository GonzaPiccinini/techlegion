import 'dotenv/config'
import mongoose from 'mongoose'

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.MONGO_CNN
    await mongoose.connect(DB_URI)
}

export default dbConnect