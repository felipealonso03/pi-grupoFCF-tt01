const data = require("../db/data")

const controladorUser = {
    usuarios: function(req, res) {
        res.render('index', {data: data.data}); 
    }
};
module.exports = controladorUser;

const controladorRegister = {
    infoUsario: function(req, res){
        res.render("index", {data: data.data.usuario})
    }
};
module.exports = controladorRegister;

