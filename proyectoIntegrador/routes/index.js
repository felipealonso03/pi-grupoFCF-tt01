const express = require('express');
const controladorIndex = require('../controllers/indexController');
const router = express.Router();
const controlador = require("../controllers/indexController")

/* GET home page. */

router.get('/', controladorIndex.indexPosts);

module.exports = router;