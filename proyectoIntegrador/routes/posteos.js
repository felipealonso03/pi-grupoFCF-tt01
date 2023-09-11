const express = require('express');
const router = express.Router();

/* detalle posteos */
router.get('/posteos/detalle', function(req, res) {
  res.send('respond with a resource');
});

/* añadir posteos */
router.get('/posteos/añadir', function(req, res) {
  res.send('respond with a resource');
});


module.exports = router;

