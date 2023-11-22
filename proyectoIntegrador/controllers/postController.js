const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos
const comm = dab.Usuarios
const op = dab.Sequelize.Op

const postController = {
    agregarPost: function(req, res) {
        return res.render('/addpost', { usuarioLogueado: true });
    },
    detallePost: function(req, res) {
        let id = req.params.id
        dab.Posteos.findByPk(id,{
            include:[{all:true, nested: true}]
        })
        .then(function(result){
            return res.render('detallePost', {post: result})
        })
        .catch(function(error){
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
        
    },
    busquedaPost : function(req,res){
        let busqueda = req.query.search;
        post.findAll ({
            include: {
                all: true,
                nested: true
            },
            where: {
                piePosteo: {[op.like] : "%" + busqueda + "%"}
            },
            order:[['updatedAt', 'DESC']]
        })
        .then((listaPosteo)=>{
            res.render('resultadoBusqueda', {listaPosteo: listaPosteo});
        })
        .catch((error)=>{
            console.log(error);
        })

    }
}

module.exports = postController; 