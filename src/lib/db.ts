import mongoose from "mongoose";

const uri = process.env.MONGODB_URI
const dbname = process.env.DBNAME


const connect = async () => {
    const connectionState = mongoose.connection.readyState

    if (connectionState == 1) {
        console.log("Connection already exists")
        return
    }

    if (connectionState == 2) {
        console.log("trying to connect....")
        return
    }

    try {
        mongoose.connect(uri!, {
            dbName: dbname,
            bufferCommands: true,
        })
        console.log("Successfully connected to DB")
    } catch (err : any) {
        console.log("ERR", err);
        throw new Error("ERR", err)
    }
}

export default connect
