const factory = require('../factory');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy, ExtractJwt } = require('passport-jwt');

require('dotenv').config();

const config = {
	usernameField: 'username',
	passwordField: 'password',
};

const jwtOption = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
};

console.log(jwtOption);

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		console.log('serialize');
		done(null, user.username);
	});

	passport.deserializeUser((username, done) => {
		console.log('deserialize');
		factory.verify(username, done);
	});

	passport.use(new LocalStrategy(config, (username, password, done) => {
		console.log('signin, local');
		factory.signin({ username, password }, done);
	}));
	
	passport.use(new Strategy(jwtOption, (jwtPayload, done) => {
		// console.log('signin, jwt');
		factory.signin(jwtPayload, done);
	}));
};
