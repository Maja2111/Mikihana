import jwt from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');


//Middleware zur Überprüfung von JWT-Token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; //Userinformation zur Anfrage hinzufügen
        next(); //Weiter zur nächten Middleware oder Route
    } catch (error) {
        res.status(403).json({ message: 'Invalid token'});
    }
};

//module.exports = authMiddleware;
export default authMiddleware;