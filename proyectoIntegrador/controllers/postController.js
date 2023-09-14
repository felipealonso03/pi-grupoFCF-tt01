const data = require("../db/data");

const postController = {
    agregarPost: function(req, res) {
        return res.render('agregarPost');
    },
    detallePost: function(req, res) {
       
        return res.render('detallePost');
    },
}

module.exports = postController;