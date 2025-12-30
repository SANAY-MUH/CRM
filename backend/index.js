import express from "express"
import router from "./router/Router.js"
import ConnectDB from "./database/Database.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express();

ConnectDB()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json());
app.use("/api", router)

app.listen(5000, () => {
    console.log("Listening Buddy!")
})