import express from "express";
import db from "./config/connectDB.js";
import ProductRoutes from "./routes/route.js";
import cors from "cors";

const app = express();
const PORT = process.env.APP_PORT;

try {
    await db.authenticate();
    console.log('Database Succesfully Connected !');
} catch(error){
    console.log('Connection Error : ', error);
}

app.use(cors());
app.use(express.json());
app.use('/products',ProductRoutes);

app.listen(process.env.APP_PORT, () => console.log(`Server Success Run At : ${PORT}`))