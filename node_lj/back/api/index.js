const express = require('express');
const factory = require('../factory');
const router = express.Router();
const authorization = require('../middlewares/authorization');
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.get('/test', authorization, (req, res, next) => {
	res.send(true);
});

router.post('/signin', (req, res, next) => {
	passport.authenticate('local', { session: true }, (err, user, info) => {
		if (err || !user) {
			return res.status(400).json({
				message: 'failed',
				user
			});
		}

		req.logIn(user, { session: true }, (err) => {
			if (err) {
				res.send(err);
			}

			const token = jwt.sign({
				username: user.username
			}, process.env.JWT_SECRET, {
				expiresIn: '1h'
			});
			console.log(user);
			console.log(token);
			res.cookie('user', 'token');
			return res.status(201).json({
				user,
				token
			});
		})
	})(req, res, next);
});

module.exports = router;