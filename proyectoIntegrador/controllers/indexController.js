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
            let username = "leon"
            let userFound = []
            for (let i = 0; i < data.posteos.length; i++) {
                if (username == data.posteos[i].username) {
                    userFound.push(data.posteos[i])
                }  
            }
        
            return res.render('MiPerfil', {info: userFound});
        },
        profileEdit: function(req, res) {
            return res.render('editarPerfil')
        },
    };


module.exports = indexController;
