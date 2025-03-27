import jwt from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');


//Middleware zur Überprüfung von JWT-Token
const authMiddleware = (req, res, next) => {
	console.log(`authMiddleware()`)
	const authHeader = req.header("Authorization")?.trim() ?? "";
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res
			.status(401)
			.json({ message: "Kein Token bereitgestellt oder falsches Format" });
	}
	const token = authHeader.split(" ")[1];
	try {
		// Überprüft das Token mit dem geheimen Schlüssel
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// Fügt Benutzerinformationen zur Anfrage hinzu
		req.user = decoded.user;
		console.log(`decoded:${JSON.stringify(req.user, null, 2)}`)
		// Weiter zur nächsten Middleware
		next();
	} catch (error) {
		res.status(400)
			.json({ msg: "abgelaufenes Token" });
	}
};
/* const token = req.header('Authorization');
 console.log(token)

 try {
 if (!token) {
		 return res.status(401).json({ message: 'Access Denied. No token provided'});
 }
	 const token = authHeader.split(" ")[1];
	 console.log(token)
 
		 const decoded = jwt.verify(token, process.env.JWT_SECRET);
		 req.user = decoded.userId; //Userinformation zur Anfrage hinzufügen
		 next(); //Weiter zur nächten Middleware oder Route
 } catch (error) {
		 res.status(403).json({ message: 'Invalid token'});
 }*/

//module.exports = authMiddleware;
export default authMiddleware;