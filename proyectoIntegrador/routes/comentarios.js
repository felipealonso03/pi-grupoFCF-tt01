const express = require('express');
const router = express.Router();

/* detalle comentarios */
router.get('/comentarios/detalle', posteo);

/* añadir comentario */
router.get('/comentarios/añadir', function(req, res) {
    res.send('respond with a resource');
  });
  
