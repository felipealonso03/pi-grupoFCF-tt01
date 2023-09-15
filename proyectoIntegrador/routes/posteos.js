const express = require('express');
const controladorPosteos = require('../controllers/postController');
const router = express.Router();

router.get('/addpost',controladorPosteos.agregarPost);
router.get('/postDetail',controladorPosteos.detallePost);

module.exports = router;