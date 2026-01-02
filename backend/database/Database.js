import mongoose from "mongoose"

const ConnectDB = async() => {
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("I am Connected!")
    }
    catch(error){
        console.log("SHittt! ERROR")
        console.log(error)
    }
}

export default ConnectDB;