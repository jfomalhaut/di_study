const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const api = require('./api');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
	origin: ['http://localhost:3000'],
	credentials: true
}));
// APIs
app.use('/api', api);

app.listen(PORT, () => {
	console.log('Start Express Server');
});