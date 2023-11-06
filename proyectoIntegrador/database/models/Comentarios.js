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

    let Comentarios = sequelize.define(alias , cols , config);

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Posteos, {
            as:"commentToPost",
            /*through:"", --> SOLO SE USA DE MUCHOS A MUCHOS */ 
            foreignKey:"idPosteos",
            /*otherKey:"", --> SOLO SE USA DE MUCHOS A MUCHOS */
        })
        Comentarios.belongsTo(models.Usuarios, {
            as:"commentToUser",
            foreignKey:"idUsuarios",
        });
    }

    return Comentarios;

}