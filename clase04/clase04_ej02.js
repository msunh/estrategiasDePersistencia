const Sequelize = require('sequelize')

const sequelize = new Sequelize('clase04','root', '',{
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize
    .authenticate()
    .then(() => {console.log('La conexión a la base de datos se realizo correctamente')})
    .catch(err => {console.error('No se ha podido establecer conexion a la base de datos.')});

class Registros extends Sequelize.Model {}
Registros.init({
    nombre : Sequelize.STRING,
    cantidad:Sequelize.INTEGER
}, {sequelize, modelName: 'productos'});


/* punto 02: insertar y eliminar un registro */

sequelize.sync()
    .then(() => 
    Registros.create({
        nombre: 'mate cocido',
        cantidad: '300'
    })
    )
    .then(jane => {console.log(jane.toJSON());})

    /*elimino*/
    .then(() => {
    Registros.destroy({
        where: {nombre:'mate cocido'}
    })    
    }
    )
    .then(() => {console.log("Registro Eliminado")}) 