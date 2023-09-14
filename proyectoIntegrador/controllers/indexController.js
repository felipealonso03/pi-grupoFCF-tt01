const data = require("../db/data");

const indexController = {
        indice: function(req, res) {
       
            return res.render('index', { info: data.posteos });
        },
        registracion: function(req, res) {
       
            return res.render('registracion');
        },
        login: function(req, res) {
       
            return res.render('login');
        },
        detalleUsuario: function(req, res) {
       
            return res.render('detalleUsuario');
        },
        profileEdit: function(req, res) {
            return res.render('editarPerfil')
        },
    };


module.exports = indexController;
