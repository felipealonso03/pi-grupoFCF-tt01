const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');



/* GET home page. */

router.get('/', controladorIndex.indice);
router.get('/register',controladorIndex.registracion);
router.get('/login',controladorIndex.login);
module.exports = router;