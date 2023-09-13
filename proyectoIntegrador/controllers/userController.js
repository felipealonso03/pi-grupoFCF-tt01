const data = require("../db/data/index")

const controladorUser = {
    usuarios: function(req, res) {
        res.render('index', {dato: data}); 
    }
};
module.exports = controladorUser;

const controladorRegister = {
    infoUsario: function(req, res){
        res.render("index", {dato: info.usuario})
    }
};
module.exports = controladorRegister;

const controladorLogin = {
    infoUsario: function(req, res){
        res.render("index", {dato: data})
    }
};
module.exports = controladorLogin;