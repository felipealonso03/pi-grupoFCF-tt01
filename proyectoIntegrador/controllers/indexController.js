const data = require("../db/data");
const bcrypt = require('bcryptjs');

const indexController = {
        indice: function(req, res) {
       
            return res.render('index', { info: data.posteos });
        },
        registracion: function(req, res) {
       
            return res.render('registracion');
        },
        store: function(req,res ) {
            let info = req.body;
            let user = {
                nombre: info.nombre,
                email: info.email,
                contrasena: bcrypt.hashSync(info.contrasena, 10) 
            };
            data.usuario.create(user)
            .then((result)=>{
                return res.redirect("/index/login");
            }).catch((error)=> {
                return console.log(error);
            })
        },
        almacen: function (req,res) {
            res.send("almacen")
            
        }
        ,


        loginAlm: function(req,res){
            let emailBuscado = req.body.email;
            let contra = req.body.password;
            let recordarme = req.body.recordarme;
            let criterio = {
                where: [{email: emailBuscado}]
            };

            data.usuario.findOne(criterio)
            .then((result)=>{
                if (result != null){
                    let check = bcrypt.compareSync(contra , result.contrasena)

                    if (check) {
                        req.session.user = result.dataValues;
                        if (recordarme != undefined) {
                            res.cookie('userId',result.id,{edadMax:1000 * 60 * 5})
                        }
                        return res.redirect("/movies")
                    } else {
                        return res.render("login")
                    }
                } else {
                    return res.send("No existe el mail " + emailBuscado)
                }
            }).catch((error) => {
                return console.log(error);
            });
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
