var express = require('express');
const controladorIndex = require('../controllers/indexController');
var router = express.Router();
const controlador = require("../controllers/indexController")

/* GET home page. */
router.get('/', controladorIndex.indexPosts);

module.exports = router;