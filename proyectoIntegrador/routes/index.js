const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');
const controladorPosteos = require("../controllers/postController");



/* GET home page. */

router.get('/', controladorIndex.indice);
router.get('/register',controladorIndex.registracion);
router.get('/login',controladorIndex.login);
router.get('/addpost',controladorPosteos.agregarPost);
router.get('/profile',controladorIndex.detalleUsuario);
router.get('/postDetail',controladorPosteos.detallePost)
router.get('/profile/edit', controladorIndex.profileEdit);

module.exports = router;