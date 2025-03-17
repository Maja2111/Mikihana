// controllers/EmailVerification.js

import User from "../models/User.js"; // Importiere das User-Modell

// Funktion zur E-Mail-Verifizierung
export const verifyEmail = async (req, res) => {
  try {
    // Finde den Benutzer anhand des übergebenen Verifizierungstokens
    const user = await User.findOne({ verificationToken: req.params.token });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired verification token." });
    }

    // Markiere den Benutzer als verifiziert und entferne das Verifizierungstoken
    user.verified = true;
    user.verificationToken = null;
    await user.save();

    // Bestätigungsmeldung zurückgeben
    res.json({ message: "Email verified successfully! You can now log in." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};




/*import User from "../Models/User.js"

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });

    if (!user) {
      return res.status(400).json({ message: "Invalid or exprired verification token." })
    }

    user.verified = true;
    user.verificationToken = null;
    await user.save();

    res.json({ message: " Email verifield successfully! You can now log in" });
  }catch (error) {
    res.status(500).json({message: error.message })
  }
};*/


