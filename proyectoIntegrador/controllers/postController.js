const data = require("../db/data");
const dab = require("../database/models");

const postController = {
    agregarPost: function(req, res) {
        return res.render('agregarPost');
    },
    detallePost: function(req, res) {
        let id = req.params.id
        
        let userFound = []

        for (let i = 0; i < data.posteos.length; i++) {
            if(id == data.posteos[i].id){
             userFound.push(data.posteos[i])
            }
         }
         res.render("detallePost", {info: userFound})
    },
}

module.exports = postController;