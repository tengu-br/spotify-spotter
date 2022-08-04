var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
/* GET home page. */
router.get('/genres', indexController.getIndex);

module.exports = router;
