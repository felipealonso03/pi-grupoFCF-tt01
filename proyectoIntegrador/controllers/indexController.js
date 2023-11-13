const bcrypt = require('bcryptjs');
const dab = require("../database/models");
const post = dab.Posteos

const indexController = {
        indice: function(req, res) {

           let filtro = {
            include:[
                {association:"postToUser"},
                {association:"postToComentario",
                include: [ {association:"commentToUser"} ] }
            ]};
       
            post.findAll(filtro)
            .then((result) => {
           
               
              return res.render("index",{listaPosteo: result})
            }).catch((error)=>{
                return res.send(error);
            });

        },
        registracion: function(req, res) {
           let errors = {};

            if(req.body.email == ''){
                errors.message = "El campo del email no puede estar vacio"

                res.locals.errors = errors
                return res.render('registracion')
            }else if (req.body.contrasena.length < 4){
                errors.message = "La contraseña no puede tener menos de 4 caracteres"
                res.locals.errors = errors

                return res.render("registracion")
            }else{
                let user = {
                    nombre:req.body.email,
                    email:req.body.email,
                    clave:bcrypt.hashSync(req.body.pass,10),
                    fechaN:req.body.dni,
                    fotoPerfil:req.body.fotoPerfil
                }
                db.Usuario.create(user)
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
            
       
            return res.render('registracion');
        },
        store: function(req,res ) {
            let info = req.body;
            let user = {
                nombre: info.nombre,
                email: info.email,
                contrasena: bcrypt.hashSync(info.contrasena, 10) 
            };
    
            dab.Usuarios.create(user)
            .then((result)=>{
                return res.redirect("/login");
            }).catch((error)=> {
                return console.log(error);
            })
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
                res.send(result)
                if (result != null){
                    let check = bcrypt.compareSync(contra , result.contra)

                    if (check) {
                        req.session.user = result.dataValues;
                        if (recordarme != undefined) {
                            res.cookie('userId',result.id,{edadMax:1000 * 60 * 5})
                        }
                        return res.redirect("/login")
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
            let username = listaPosteo.postToUser.email
            let userFound = []
            for (let i = 0; i < listaPosteo.idPosteos[i].length; i++) {
                if (username == listaPosteo.postToUser.email) {
                    userFound.push(listaPosteo.idPosteos[i])
                }  
            }
        
            return res.render('MiPerfil', {listaPosteo: userFound});
        },
        profileEdit: function(req, res) {
            return res.render('editarPerfil')
        },
    };


module.exports = indexController;
