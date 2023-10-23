module.exports = function (sequelize , DataTypes) {

    let alias = "Posteos";

    let cols = {
        idPosteos: {
            autoIncrement: true,
            primeryKey: true,
            type: DataTypes.INTEGER
        },
        nombreImagen: {
            type: DataTypes.STRING

        },
        url: {
            type: DataTypes.STRING

        },
        piePosteo: {
            type: DataTypes.STRING

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

    return Posteo;

}