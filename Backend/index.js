import express from "express";
import dotenv from "dotenv";
import { connect } from "./utils/connect.js";
dotenv.config();
import cors from "cors";
import authRoutes from "./Router/routes.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", authRoutes);

const port = process.env.port || 4001;

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
