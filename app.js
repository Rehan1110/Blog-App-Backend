import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js"
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set("strictQuery",false);

const MONGO_URL = process.env.MONGO_URI
const PORT = 5000

mongoose.connect(MONGO_URL)
        .then(() => {
          console.log("Database connected successfully");
          app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`);
          });
        })
        .catch((err) => console.log(err));
