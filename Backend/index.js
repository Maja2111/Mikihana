import express from "express";
import dotenv from "dotenv";
import { connect } from "./utils/connect.js";
import cors from "cors";
import authRoutes from "./Router/routes.js";
import profileRoutes from './Router/profileRoutes.js'
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

//CORS muss credentials: true  haben, damit Cookies funktioniert
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));


app.get("/", (req,res) => {
  console.log({
    headers: req.headers,
    cookies: req.cookies,
  });
  return res.sendStatus(200);
});

//Cookie munuell setzen(ohne cookie-parser)
app.get("/cookie", (req, res) => {
  res.setHeader("Set-Cookie", "sessionId=123456; Expires=31 Oct 2025; Secure; HttpOnly");
  res.status(200).send("Cookie manuell gesetzt!!");
});

//Sichers Cookie setzen 
app.get("/easycookie", (req,res) => {
  res.cookie("secure-session", "abc1234", {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
  maxAge: 1000 * 60 * 60,
})
  res.status(200).send("Secure Cookie ")
});



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
