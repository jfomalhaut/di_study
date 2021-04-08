const factory = require('../factory');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy, ExtractJwt } = require('passport-jwt');

require('dotenv').config();

const config = {
    usernameField: 'username',
    passwordField: 'password',
};

const jwtOprtion = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('serialize');
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        console.log('deserialize');
        // DB Check (username을 토대로 verify)
        factory.verify(username, done);
    });

    passport.use(new LocalStrategy(config, (username, password, done) => {
        // DB Signin
        factory.signin({ username, password }, done);
    }));

    passport.use(new Strategy(jwtOprtion, (jwtPayload, done) => {
        // DB Signin
        factory.signin(jwtPayload, done);
    }));

}



