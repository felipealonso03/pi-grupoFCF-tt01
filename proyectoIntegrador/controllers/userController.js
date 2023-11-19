const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos

const controladorUser = {
    usuarios: function(req, res) {
        res.render('index', {data: data.data});
    },
    infoUsario: function(req, res){
        res.render("index", {data: data.data.usuario})
    },
    detalleUsuario: function(req, res) {
        let username = req.params.username
        
        let userFound = []

        for (let i = 0; i < data.posteos.length; i++) {
            if(username == data.posteos[i].username){
             userFound.push(data.posteos[i])
            }
         }
         console.log(userFound);
         res.render("detalleUsuario", {info: userFound})
    },
};
module.exports = controladorUser;
