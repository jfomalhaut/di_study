const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {

    console.log('verify');
    try {
        const clientToken = req.headers.authorization.split('Bearer ')[1];
        const decoded = jwt.verify(clientToken, JWT_SECRET);

        console.log("clientToken")
        console.log(clientToken)
        if (decoded) {
            res.locals.userId = decoded.username;
            next();

        } else {
            req.logout();
            res.status(401).json({ error: 'unauthorized' });
        }
    } catch {
        req.logout();
        res.status(401).json({ error: "Token has expired" });
    }
};

module.exports = verifyToken;