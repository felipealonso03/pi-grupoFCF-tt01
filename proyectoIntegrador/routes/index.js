const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');



/* GET home page. */

router.get('/', controladorIndex.indice);
router.get('/register',controladorIndex.registracion);
router.get('/login',controladorIndex.login);
router.get('/addpost',controladorIndex.agregarPost);
router.get('/profile',controladorIndex.detalleUsuario);
router.get('/postDetail',controladorIndex.detallePost)
module.exports = router;