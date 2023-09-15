const data = require("../db/data")

const controladorUser = {
    usuarios: function(req, res) {
        res.render('index', {data: data.data});
    },
    infoUsario: function(req, res){
        res.render("index", {data: data.data.usuario})
    },
    detalleUsuario: function(req, res) {
        return res.render('detalleUsuario');
    },
};
module.exports = controladorUser;
