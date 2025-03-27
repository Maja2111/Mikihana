import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js"
import { Resend } from "resend";
import upload from "../uploads/multerConfig.js";
import cookieParser from "cookie-parser";
import { UserVerification } from "../Models/UserVerification.js";

import { transporter } from "../utils/mailtrap.js";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

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
		let profilePhoto = req.body.profilePhoto;
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

		//Passwort hashen
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(`111`);

		//Verifizierung-Token generieren
		const verificationToken = Math.random().toString(36).substring(2, 15);
		console.log(`222`);

		//Save URL
		profilePhoto = req.file ? `/uploads/${req.file.filename}` : null;
		console.log(`333`);


		//Neuen Benutzer erstellen
		const newUser = await User.create({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
			birthday,
			gender,
			verified: false,
			verificationToken,
			profilePhoto: profilePhoto,
		});
		console.log(`444`);

		//Verifizierungs_Link erstellen
		const verificationLink = `${process.env.BASE_URL}/api/users/verify/${verificationToken}`;
		console.log(`555`);

		//Verifizierungs-Email senden
		// await resend.emails.send({
		// 	from: "onboarding@resend.dev",
		// 	to: [email],
		// 	subject: "Verify Your Email",
		// 	html: `<p>Please verify your email by clicking the link below:</p>
		// <p><a href="${verificationLink}">${verificationLink}</a></p>`
		// });

		//SOM
		const mailOptions = {
			from: "mikihanaproject@gmail.com",
			to: [email],
			subject: "Verify Your Email",
			html: `<p>Please verify your email by clicking the link below:</p>
			<p><a href="${verificationLink}">${verificationLink}</a></p>`
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				res.status(500).json({ message: `SOM-${error.message}` });
			} else {
				console.log('Email sent: ' + info.response);
				res.status(201).json({ message: 'Registration successful!', newUser: { ...newUser, password: undefined } });
			}
		});
	} catch (error) {
		res.status(500).json({ message: `${error.message}` });
	}
});

//Verifizirung per E-mail
router.get("/verify/:token", async (req, res) => {
	try {
		const verification = await User.findOne({ verificationToken: req.params.token });

		if (!verification) {
			return res.status(400).json({ message: "Invalid or expired verification token." })
		}

		//Benutzer als verifiziert markieren
		verification.verified = true;
		verification.verificationToken = null;//Token entfrnen
		await verification.save();

		res.json({ message: "Email verifield successfully!! You can now log in. " });

	} catch (error) {
		res.status(500).json({ message: error.message })
	}
});


//Authentifiziert einen Benutzer und gibt ein JWT-TOKEN zurückt
router.post("/login", async (req, res) => {
	//token
	const authHeader = req.headers.authorization;
	if (authHeader && authHeader.startsWith('Bearer ')) {
		// Überprüfen Bearer token
		const token = authHeader.split(' ')[1];

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const user = await User.findById(decoded.userId);

			if (!user) {
				return res.status(401).json({ error: "Invalid token" });
			}

			// Token ist gültig
			return res.status(200).json({
				message: "Token verified",
				user: {
					id: user._id,
					email: user.email,
					name: user.firstName ? `${user.firstName} ${user.lastName}` : user.name,
				},
			});
		} catch (error) {
			return res.status(401).json({ error: "Invalid token" });
		}
	} else {
		const { username, password } = req.body;
		console.log(req.body);
		try {
			const user = await User.findOne({ username });
			if (!user) return res.status(400).json({ error: "username missed" });

			if (!user.verified) return res.status(400).json({ error: "Please verify email." });

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.status(400).json({ error: "Password or Username missed" });

			//Erstellen Authentifizierungstokens
			const token = jwt.sign({ user }, process.env.JWT_SECRET);
			console.log(token)

			//Setze das Token als HttpOnly-Cookie
			//res.cookie('token', token); //Geb das Token zurück
			res.status(200).json({
				message: "Login erfolgreich",
				token,
				user: {
					id: user._id,
					email: user.email,
					name: user.firstName ? `${user.firstName} ${user.lastName}` : user.name,
				},
			});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
});

//Pasword vergessen - Email senden
router.post("/forgot-password", async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: "Email not found" });
		}

		//Generie einen Reset-Token(gültig für 1 Std.)
		const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

		const resetLink = `${process.env.BASE_URL}/reset-password/${resetToken}`;

		try {
			await resend.emails.send({
				from: "onboarding@resend.dev",
				to: [email],
				subject: "Passwort zurücksetzen",
				html: `<p>Klicken Sie auf den folgenden Link, um Ihr Passwort zurückzusetzen:</p>
               <p><a href="${resetLink}">${resetLink}</a></p>`
			});

		} catch (error) {
			return res.status(500).json({ message: "Fehler beim Senden der E-Mail." });
		}

		res.json({ message: "E-Mail zum Zurücksetzen des Passworts wurde gesendet!" });
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
});

//Password zurücksetzen (nach dem Klick auf den Link)
router.post("/reset-password/:token", async (req, res) => {
	try {
		const { token } = req.params;
		const { newPassword, newPasswordRepeat } = req.body;

		if (!newPassword || !newPasswordRepeat) {
			return res.status(400).json({ message: "Bitte beide Passwortfelder ausfüllen." });
		}

		if (newPassword !== newPasswordRepeat) {
			return res.status(400).json({ message: "Passwörter stimmen nicht überein." });
		}

		let decoded;
		try {
			decoded = jwt.verify(token, process.env.JWT_SECRET);
		} catch (error) {
			return res.status(400).json({ message: "Ungültiger oder abgelaufener Token." });
		}

		const user = await User.findById(decoded.userId);
		if (!user) {
			return res.status(400).json({ message: "Benutzer nicht gefunden." });
		}

		user.password = await bcrypt.hash(newPassword, 10);
		await user.save();

		res.json({ message: "Passwort erfolgreich zurückgesetzt!" });

	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;



