const express = require('express');
const factory = require('../factory');
const router = express.Router();

router.get('/signin/:username/:password', factory.signin);
router.post('/login', factory.login);

module.exports = router;