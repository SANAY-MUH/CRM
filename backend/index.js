import express from "express"
import router from "./router/Router.js"
import ConnectDB from "./database/Database.js";

const app = express();

ConnectDB()

app.use(express.json());
app.use("/api", router)

app.listen(5000, () => {
    console.log("Listening Buddy!")
})