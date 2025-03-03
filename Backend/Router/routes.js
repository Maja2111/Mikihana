import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
//import upload from "../uploads/multerConfig.js";

const router = express.Router();

//Registierung (Register)
router.post('/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordRepeat,
      birthday,
      gender,
    } = req.body;
    console.log(req.body);

    //Überprüfung, ob alle Felder ausgefüllt sind
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !passwordRepeat ||
      !birthday ||
      !gender
    ) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    if (password !== passwordRepeat) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    //Prüfen, ob die E-mail bereit registriet ist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail is already registered.' });
    }

    //Save URL
    const profilePhoto = req.file ? `/uploads/${req.file.filename}` : null;

    //Neuen Benutzer erstellen
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      birthday,
      gender,
      profilePhoto,
    });

    res.status(201).json({ message: 'Registration successful!', newUser: { ...newUser, password: undefined } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Authentifiziert einen Benutzer und gibt ein JWT-TOKEN zurückt
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password.user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    //Erstellen Authentifizierungstokens
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token }); //Geb das Token zurück
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//module.exports = router;
export default router;
