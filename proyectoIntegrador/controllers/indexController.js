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
        agregarPost: function(req, res) {
       
            return res.render('agregarPost');
        },
        detalleUsuario: function(req, res) {
       
            return res.render('detalleUsuario');
        }
        ,
        detallePost: function(req, res) {
       
            return res.render('detallePost');
        }

    };


module.exports = indexController;
