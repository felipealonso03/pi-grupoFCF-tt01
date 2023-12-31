const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/addpost', postController.agregarPost); 

router.post('/addpost',postController.nuevoPost);

router.get('/postDetail/:id',postController.detallePost);

router.get("/resultadoBusqueda", postController.busquedaPost);

module.exports = router;