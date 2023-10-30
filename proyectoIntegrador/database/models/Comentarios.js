module.exports = function (sequelize , dataTypes) {

    let alias = "Comentarios";

    let cols = {
        idComentarios: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        textoComent: {
            type: dataTypes.STRING

        },
        idPosteos: {
            type: dataTypes.INTEGER
        },
        idUsuarios: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: false ,
        underscore: false
    }

    let Comentario = sequelize.define(alias , cols , config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Posteo, {
            as:"commentToPost",
            /*through:"", --> SOLO SE USA DE MUCHOS A MUCHOS */ 
            foreignKey:"idPosteos",
            /*otherKey:"", --> SOLO SE USA DE MUCHOS A MUCHOS */
            timestamps:true
        });
        Comentario.belongsTo(models.Usuario, {
            as:"commentToUser",
            foreignKey:"idUsuarios",
            timestamps:true
        });
    }

    return Comentario;

}