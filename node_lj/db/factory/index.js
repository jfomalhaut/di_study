const mysql = require('mysql');
require('dotenv').config();

const info = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_DB,
};

let conn, sql;
const timer = 2000;

const handleDisconnect = () => {
	conn = mysql.createConnection(info);
	conn.connect((err) => {
		if (err) {
			console.log('Error message : ' + err);
			setTimeout(handleDisconnect, timer);
		}
	});

	conn.on('error', (err) => {
		console.log('DB ERROR : ' + err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
};

handleDisconnect();

// POST
module.exports.searchPainting = (req, res) => {
	const { body: { keyword } } = req;
	sql = `SELECT * FROM art_list WHERE painting_title LIKE '%?%'`;
	conn.query(sql, [keyword], (err, data) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

module.exports.getArtist = (req, res) => {
	sql = `SELECT 
				list_id, 
				artist, 
				artist_origin, 
				COUNT(artist) AS count 
			FROM art_list GROUP BY artist ORDER BY artist`;
	conn.query(sql, (err, data) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

module.exports.getPainting = (req, res) => {
	const { query: { artist } } = req;
	sql = `SELECT * FROM art_list WHERE artist = ?`;
	conn.query(sql, [artist], (err, data) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

module.exports.search = (req, res) => {
	const { body: { target, keyword, orderby } } = req;
	const searchSQL = keyword === '' ? '' : `AND ${target} LIKE '%${keyword}%'`;
	const orderBySQL = orderby === '' ? '' : `ORDER BY ${orderby}`;
	sql = `
		SELECT * FROM art_list
		WHERE 1 = 1
		${searchSQL}
		${orderBySQL}
	`;
	conn.query(sql, (err, data) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

// (artist like '%${keyword}%' OR
// paiting_title like '%${keyword}%' OR
// year like '%${keyword}%'  OR
// artist_origin like '%${keyword}%' )