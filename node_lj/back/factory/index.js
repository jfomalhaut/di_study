const userinfo = {
	username: 'dlwnssla',
	password: 'dlwns123',
	name: 'LeeJun',
	birth: '01-10'
};

module.exports.signin = (req, res) => {
	const { params: { username, password } } = req;
	if (username === userinfo.username && password === userinfo.password) {
		res.send({ userinfo });
	} else {
		res.send(false);
	}
};

module.exports.login = (req, res) => {
	const { body: { username, password } } = req;
	if (username === userinfo.username && password === userinfo.password) {
		res.send({ userinfo });
	} else {
		res.send(false);
	}
};