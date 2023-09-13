const express = require('express');
const controladorRegister = require('../controllers/userController');
const router = express.Router();
const controladorUser = require("../controllers/userController")
const controladorLogin = require("../controllers/userController")

/* GET users listing. */
router.get('/', controladorUser.infoUsario);

/* Registro usuario */
router.get("/", controladorRegister.infoUsario);

/* Login usuario */
router.get("/", controladorLogin.infoUsario);

module.exports = router;