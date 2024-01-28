import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import openaiRoute from "./routes/openaiRoute.js"

const PORT = 5000

dotenv.config();
const app = express();
app.use(cors());


app.get("/", async (req, res)=> {
    res.send("HOLA from the SERVER")
})

app.listen( PORT, () => {
    console.log(`server listening on PORT:${PORT}`)
})