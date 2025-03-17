// routes/emailVerificationRoutes.js

import express from "express";
import { verifyEmail } from "../controllers/EmailVerification.js"; // Importiere den Controller

const router = express.Router();

// Route für die E-Mail-Verifizierung
router.get("/verify/:token", verifyEmail);

export default router;

