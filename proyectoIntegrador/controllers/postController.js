const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos
const comm = dab.Usuarios

const postController = {
    agregarPost: function(req, res) {
        return res.render('/addpost', { usuarioLogueado: true });
    },
    detallePost: function(req, res) {
        let id = req.params.idPosteos

        dab.Posteos.findByPk(id, {
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
    nuevoPost : function(req,res){
        let nuevo = {
            userId : req.session.user.idUsuarios,
            url : req.body.url,
            pieImg : req.body.piePosteo
        }
        dab.Posteos.create(this.nuevoPost)
        .then(result =>{
            return res.redirect('/newpost')
        })
        .catch((error)=> {
        
            return res.send(error)
        })
        
    }
}

module.exports = postController;