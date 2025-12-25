import mongoose from "mongoose"

const ConnectDB = async() => {
    try{
    await mongoose.connect(`mongodb+srv://sanay3456:mongodb3456@cluster6.mryywvf.mongodb.net/`)
    console.log("I am Connected!")
    }
    catch(error){
        console.log("SHittt! ERROR")
        console.log(error)
    }
}

export default ConnectDB;