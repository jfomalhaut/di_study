const userinfo = {
	username: 'dlwnssla',
	password: 'dlwns123',
	name: 'LeeJun',
	birth: '01-10'
};

module.exports.signin = (req, callback) => {
	const { username, password } = req;
	if (username === userinfo.username && password === userinfo.password) {
		return callback(null, userinfo);
	} else {
		console.log('false');
		return callback(null, false);
	}
};

module.exports.verify = (username, callback) => {
	// username을 토대로 Data를 찾아 콜백해준다.
	return callback(null, userinfo);
};

module.exports.login = (req, res) => {
	const { body: { username, password } } = req;
	if (username === userinfo.username && password === userinfo.password) {
		res.send({ userinfo });
	} else {
		res.send(false);
	}
};