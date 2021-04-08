const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
const api = require('./api');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
	origin: ['http://localhost:3000'],
	credentials: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	resave: false,
	saveUnitialized: false,
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		maxAge: 60 * 60 * 1000
	}
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// APIs
app.use('/api', api);

app.listen(PORT, () => {
	console.log('Start Express Server');
});