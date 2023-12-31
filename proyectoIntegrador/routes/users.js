const express = require('express');
const controladorRegister = require('../controllers/userController');
const router = express.Router();
const controladorUser = require("../controllers/userController")
const controladorLogin = require("../controllers/userController")


/* GET users listing. */
router.get('/', controladorUser.usuarios);

/* Detalle usuario */
router.get("/detail/:username", controladorUser.detalleUsuario);

/* Login usuario */
router.get("/", controladorLogin.infoUsario);

module.exports = router;