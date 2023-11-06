module.exports = function (sequelize , dataTypes) {

    let alias = "Posteos";

    let cols = {
        idPosteos: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreImagen: {
            type: dataTypes.STRING

        },
        url: {
            type: dataTypes.STRING

        },
        piePosteo: {
            type: dataTypes.STRING

        },
        idUsuarios: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "posteos",
        timestamps: false ,
        underscore: false
    }

    let Posteos = sequelize.define(alias , cols , config);

    Posteos.associate = function(models){
        Posteos.hasMany(models.Comentarios, {
            as:"postToComentario",
            /*through:"", --> SOLO SE USA DE MUCHOS A MUCHOS */ 
            foreignKey:"idPosteos",
            /*otherKey:"", --> SOLO SE USA DE MUCHOS A MUCHOS */
          
        })
        Posteos.belongsTo(models.Usuarios, {
            as:"postToUser",
            foreignKey:"idUsuarios",
        });
    }

    return Posteos;

}