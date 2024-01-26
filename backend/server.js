import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

const PORT = 5000

dotenv.config();
const app = express();
app.use(cors());