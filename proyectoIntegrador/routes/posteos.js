const express = require('express');
const router = express.Router();
const controlador = require("../controllers/postController")

/* detalle posteos */
router.get('/posteos/aniadir', controladorPosteos.detallePosts);

/* detalle posteos */
router.get('/comentarios/detalle', controladorPosteos.aniadirPosts);

/* añadir posteos */
router.get('/posteos/aniadir', controladorPosteos.detalleComentarios);

module.exports = router;