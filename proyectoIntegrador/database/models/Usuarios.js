module.exports = function (sequelize , dataTypes) {

    let alias = "Usuarios";

    let cols = {
        idUsuarios: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING

        },
        pass: {
            type: dataTypes.STRING

        },
        fotoPerfil: {
            type: dataTypes.STRING

        },
        fecha: {
            type: dataTypes.DATE

        },
        dni: {
            type: dataTypes.INTEGER

        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE

        },
        deletedAt: {
            type: dataTypes.DATE

        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true ,
        underscore: false
    }

    let Usuarios = sequelize.define(alias , cols , config);
    

    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Posteos, {
            as:"usuariosToPost",
            /*through:"", --> SOLO SE USA DE MUCHOS A MUCHOS */ 
            foreignKey:"idUsuarios",
            /*otherKey:"", --> SOLO SE USA DE MUCHOS A MUCHOS */
        });
        Usuarios.hasMany(models.Comentarios, {
            as:"usuarioToComment",
            foreignKey:"idUsuarios",
        });
    }

    return Usuarios;

}