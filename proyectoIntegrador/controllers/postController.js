const controladorPosteos = {
    aniadirPosts: function(req, res) {
        res.send('Añada un post')},
    
    detallePosts: function(req, res) {
        res.send('Ver mas sobre este post')},
    
    detalleComentarios: function(req, res) {
        res.send('Ver comentarios')},

    aniadirComentario: function(req, res) {
        res.send('Añadir comentarios')},
};

module.exports = controladorPosteos;