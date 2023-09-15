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
        profile: function(req, res) {
            return res.render('MiPerfil');
        },
        profileEdit: function(req, res) {
            return res.render('editarPerfil')
        },
    };


module.exports = indexController;
