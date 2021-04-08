const userinfo = {
    username: 'hsdkim',
    password: 'hsdkim',
    name: "kim",
    birth: '12-15'
}

module.exports.signin = (req, callback) => {
    const { username, password } = req;
    if (username === userinfo.username && password === userinfo.password) {
        return callback(null, userinfo);
    } else {
        return callback(null, false);
    }
};

module.exports.verify = (username, callback) => {
    // username을 토대로 Data 를 찾아 콜백해준다.
    return callback(null, userinfo);
}

module.exports.login = (req, res) => {
    const { body: { username, password } } = req;
    if (username === userinfo.username && password === userinfo.password) {
        res.send({ userinfo });
    } else {
        res.send(false)
    }
};




