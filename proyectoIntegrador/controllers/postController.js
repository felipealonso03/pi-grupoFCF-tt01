const bcrypt = require('bcryptjs');
const dab = require("../database/models/Posteos");
const post = dab.Posteos
const comm = dab.Usuarios

const postController = {
    agregarPost: function(req, res) {
        return res.render('agregarPost', { usuarioLogueado: true });
    },
    detallePost: function(req, res) {
        let id = req.params.id

        post.findByPk(id, {
            include:[
                {
                association:"postToComentario",
                include: [ {association:"commentToUser"} ]
                },
                {association:"postToUser"}
            ],
            orden: [
                ["postToComentario","createdAt","DESC"]
            ]
        }).then((result)=> {
            return res.render('detallePost',{post:result , usuarioLogueado: true})
        })
        .catch((error) => {
            return res.send(error)
        })
        
      
        
    },
}

module.exports = postController;