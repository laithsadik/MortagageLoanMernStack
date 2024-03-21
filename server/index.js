import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import contactRouter from "./routes/contact.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(5000, () => {
      console.log("server start on port 5000...");
    });

    console.log("connected to mongoDB...");
  })
  .catch((err) => console.log("error connecting to mongoDB...",err.message));

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//use client app
app.use(express.static(path.join(__dirname, "/client/build")));
app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})