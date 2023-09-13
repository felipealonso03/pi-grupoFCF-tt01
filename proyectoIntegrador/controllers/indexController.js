const data = require("../db/data/index")

const controladorIndex = {
    indexPosts: function(req, res) {
    res.render('index', {dato: data.posteos})},
};

module.exports = controladorIndex;