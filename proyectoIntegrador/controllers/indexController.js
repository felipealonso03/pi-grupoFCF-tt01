const session = require('express-session');
const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos
const usuarios = dab.Usuarios

const indexController = {
        indice: function(req, res) {

           let filtro = {
            include:[
                {association:"postToUser"},
                {association:"postToComentario",
                include: [ {association:"commentToUser"} ] 
            }], 
            orden: [
                ["created_At","DESC"]
            ]
            };
       
            post.findAll(filtro)
            .then((result) => {
                
              /*si quiero ver database --> return res.send(result) */
              return res.render("index",{listaPosteo: result , usuarioLog: false})
            }).catch((error)=>{
                return res.send(error);
            });

        },
        registracion: function(req, res) {
            return res.render('registracion');

        },
        store: function(req,res ) {
            
            let errors = {};

            if(req.body.email == ''){
                 errors.message = "El campo del email no puede estar vacio"
 
                 res.locals.errors = errors
             
                 return res.render('registracion')
             }
              else if (req.body.contrasena.length < 4){
                 errors.message = "La contraseña no puede tener menos de 4 caracteres"
                 res.locals.errors = errors
                 return res.render('registracion')
 
             }
              else{
                console.log(req.body.email,'Fede')
                 let user = {
                     email:req.body.email,
                     pass:bcrypt.hashSync(req.body.contrasena,10),
                     fecha:req.body.fecha,
                     fotoPerfil:req.body.foto,
                     dni:req.body.dni
                 }
                 dab.Usuarios.create(user)
                 .then(result => {
                     console.log("---------------------------------------");
                     console.log(result);
                     return res.redirect('/login')
                 })
                 .catch((error)=> {
 
                     console.log(error);
                     if(error.errors[0].message == "email must be unique"){
                         errors.message = "Ese email ya fue utilizado"
                         res.locals.errors = errors
                         return res.render("registracion")
                     }else{
                         return res.send(error)
                     }
                     
                 })
                 
             }
        },
        loginAlm: function(req,res){
            let emailBuscado = req.body.usuarioEmail;
            let contra = req.body.contrasena;
            let recordarme = req.body.recordarme;
            let criterio = {
                where: [{email: emailBuscado}]
            };

            /*return res.send(req.body)*/
            dab.Usuarios.findOne(criterio)
            .then((result)=>{
                
                if (result != null){
                    let check = bcrypt.compareSync(contra , result.pass)
                    if (check) {
                        req.session.user = result.dataValues;
                        if (recordarme != undefined) {
                            res.cookie('userId',result.id,{edadMax:1000 * 60 * 5})
                        }
                        console.log('LLegue')
                        return res.redirect("/")
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
        
    profile: function (req, res) {

        let usuario = req.session.user;
        post.findAll(usuario.idUsuarios)
            .then(function (result) {
            
                
                res.render("MiPerfil", { datos: result })
            })
            .catch(error => console.log(error))
    },
        profileEdit: function(req, res) {

            if(req.session.user != undefined){
                return res.render('editarPerfil',{usuario: req.session.user, usuarioLog: true})
            } else {
                return res.render('login')
            }
        }, 
        logout: function (req,res) {
            req.session.user = undefined
            return res.redirect('/login')
        }
    };


module.exports = indexController;
