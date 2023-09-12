const express = require('express');
const controladorPosteos = require('../controllers/postController');
const router = express.Router();
const controlador = require("../controllers/postController")


/* detalle posteos */
router.get('/posteos/aniadir', controladorPosteos.detallePosts);

/* añadir posteos */
router.get('/comentarios/detalle', controladorPosteos.aniadirPosts);

/* detalle comentarios */
router.get('/comentarios/detalle', controladorPosteos.detalleComentarios);

/* añadir comentarios */
router.get('/comentarios/aniadir', controladorPosteos.aniadirComentarios);

module.exports = router;