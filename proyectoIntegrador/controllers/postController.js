const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos
const op = dab.Sequelize.Op
const comm = dab.Comentarios

const postController = {
    agregarPost: function(req, res) {

        return res.render("agregarPost");
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
            idUsuarios : req.session.user.idUsuarios,
            url : req.body.url,
            piePosteo : req.body.piePosteo,
            nombreImagen: req.body.nombreImagen
        }
        dab.Posteos.create(nuevo)
        .then(result =>{
            return res.redirect('/')
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