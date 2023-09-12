var express = require('express');
var router = express.Router();
const controlador = require("../controllers/indexController")

/* GET home page. */
router.get('/', controladorIndex.indexPosts);

module.exports = router;