const express = require('express');
const factory = require('../factory');
const router = express.Router();

// 검색시
router.post('/searchPainting', factory.searchPainting);
// 아티스트 리스트
router.get('/getArtist', factory.getArtist);
// 아티스트에 맞는 그림 리스트
router.get('/getPainting', factory.getPainting);

module.exports = router;