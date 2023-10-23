module.exports = function (sequelize , DataTypes) {

    let alias = "Comentarios";

    let cols = {
        idComentarios: {
            autoIncrement: true,
            primeryKey: true,
            type: DataTypes.INTEGER
        },
        textoComent: {
            type: DataTypes.STRING

        },
        idPosteos: {
            type: DataTypes.INTEGER
        },
        idUsuarios: {
            type: DataTypes.INTEGER
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