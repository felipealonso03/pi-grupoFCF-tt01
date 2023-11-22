const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const user = dab.Usuarios

const controladorUser = {
    usuarios: function(req, res) {
        res.render('index', {data: data.data});
    },
    infoUsario: function(req, res){
        res.render("index", {data: data.data.usuario})
    },
    detalleUsuario: function(req, res) {
        let idUser = req.params.username;
        user.findByPk(idUser,{
            include: [
                {
                    association:"usuariosToPost",
                    include: [{association:"postToComentario"}]
                }
            ]
        }).then((result)=> {
            console.log(result)
            return res.render('detalleUsuario',{user:result, usuarioLog: true})
        })
        .catch((error) => {
            return res.send("error");
        }); 

    }
};
module.exports = controladorUser;
