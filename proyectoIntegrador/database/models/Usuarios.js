module.exports = function (sequelize , DataTypes) {

    let alias = "Usuarios";

    let cols = {
        idUsuarios: {
            autoIncrement: true,
            primeryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING

        },
        pass: {
            type: DataTypes.STRING

        },
        fotoPerfil: {
            type: DataTypes.STRING

        },
        fecha: {
            type: DataTypes.DATE

        },
        dni: {
            type: DataTypes.INTEGER

        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE

        },
        deletedAt: {
            type: DataTypes.DATE

        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true ,
        underscore: false
    }

    let Usuario = sequelize.define(alias , cols , config);
    

    Usuario.associate = function(models){
        Usuario.hasMany(models.Posteo, {
            as:"usuariosToPost",
            /*through:"", --> SOLO SE USA DE MUCHOS A MUCHOS */ 
            foreignKey:"idUsuarios",
            /*otherKey:"", --> SOLO SE USA DE MUCHOS A MUCHOS */
            timestamps:true
        });
        Usuario.hasMany(models.Comentario, {
            as:"usuarioToComment",
            foreignKey:"idUsuarios",
            timestamps:true
        });
    }

    return Usuario;

}