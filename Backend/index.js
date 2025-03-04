import express from "express";
import dotenv from "dotenv";
import { Mongoose } from "mongoose";
import { connect } from "./utils/connect.js";
dotenv.config();
import cors from "cors";
import authRoutes from "./Router/routes.js";
import profileRoutes from './Router/profileRoutes.js'

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", authRoutes);

app.use('/api/profile', profileRoutes);

const port = process.env.port || 4001;


app.use((err, req, res, next) => {
  console.error(err);
  return res.sendStatus(500);
});


connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
