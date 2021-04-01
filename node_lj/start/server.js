import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const {
	env: { PORT },
} = process;

const app = express();

app.get("/", (req, res) => {
	res.send("HELLO");
});

app.get("/getData", (req, res, next) => {
	const { query: { name, price } } = req;
	res.send(`구매하신상품은 : ${name}, 가격은 ${price}원입니다`);
});

app.listen(PORT, () => {
	console.log(`START EXPRESS SERVER. PORT NUMBER : ${PORT}`);
});