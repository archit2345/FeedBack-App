import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ?: Number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database")
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI  || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")

    } catch (error) {
        console.log("Database Connection Failed", error)
        process.exit(1)
    }
}

export default dbConnect;

//ready state
// 0: Disconnected
// 1: Connected
// 2: Connecting
// 3: Disconnecting