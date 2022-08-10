var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/spotify.js');
/* GET home page. */
router.get('/genres', spotifyController.getGenres);
router.get('/songs', spotifyController.getSongs);

module.exports = router;
