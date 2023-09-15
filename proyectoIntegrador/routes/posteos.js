const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/addpost', postController.agregarPost); 
router.get('/postDetail',postController.detallePost);

module.exports = router;