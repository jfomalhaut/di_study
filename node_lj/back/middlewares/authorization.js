const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
	try {
		const clientToken = req.headers.authorization.split('Bearer ')[1];
		const decoded = jwt.verify(clientToken, JWT_SECRET);
		if (decoded) {
			res.locals.userId = decoded.username;
			next();
		} else {
			req.logout();
			res.status(401).json({ error: 'unauthorized' });
		}
	} catch {
		req.logout();
		res.status(401).json({ error: 'Token has expired' });
	}
};

module.exports = verifyToken;