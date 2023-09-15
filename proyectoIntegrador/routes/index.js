const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');
const controladorPosteos = require("../controllers/postController");
const controladorUser = require('../controllers/userController');



/* GET home page. */

router.get('/', controladorIndex.indice);

router.get('/register',controladorIndex.registracion);
router.get('/login',controladorIndex.login);

router.get('/user',controladorUser.detalleUsuario);

router.get('/profile',controladorIndex.profile);

router.get('/profile/edit', controladorIndex.profileEdit);

module.exports = router;