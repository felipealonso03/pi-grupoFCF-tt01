const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');
const controladorPosteos = require("../controllers/postController");
const controladorUser = require('../controllers/userController');



/* GET home page. */

router.get('/', controladorIndex.indice);

/* mostrar formulario de registracion */
router.get('/register',controladorIndex.registracion);

/* Procesar los datos del formulario de REGISTER */
router.post('/register',controladorIndex.almacen);

/* mostrar formulario LOGIN */
router.get('/login',controladorIndex.login);

/* Procesar los datos del formulario de LOGIN */
router.post('/login', controladorIndex.loginAlm)

router.get('/user',controladorUser.detalleUsuario);

router.get('/profile',controladorIndex.profile);

router.get('/profile/edit', controladorIndex.profileEdit);

module.exports = router;