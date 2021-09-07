const { STRING } = require('sequelize');
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'clase04',
    'root',
    '',
    {host: 'localhost', dialect:'mariadb'}
    );

sequelize
    .authenticate()
    .then(() => {console.log('la conexión a la base de datos se realizo correctamente')})
    .catch(err => {console.err('No se ha podido establecer conexiona la base de datos', err)}) // TypeError: console.err is not a function, Porque este error?

class Registros extends Sequelize.Model {}
Registros.init({
    nombre : Sequelize.STRING,
    cantidad : Sequelize.INTEGER

},{sequelize, modelName:'productos'});


/* punto 03: inserción y actualización de varios registros */

sequelize.sync()
    .then(() => 
    Registros.create({
        nombre: 'mermelada',
        cantidad:'250'
    })
    )

    .then(() => 
    Registros.create({
        nombre: 'arroz',
        cantidad: '365'
    })
    )

    .then(() => 
    Registros.create({
        nombre:'vino',
        cantidad: '600'
    })
    )
    .then(jane => {console.log(jane.toJSON());})
    
    /* actualizar varios registros*/
    
    .then(() => {
        Registros.update(
            {cantidad: '0'},
            {where: {nombre:'vino'}}
        )
    })
    
    .then(() => {
        Registros.update(
            {cantidad: '2000'},
            {where: {id:'1'}}
        )
    })
    
    .then(() => {
        Registros.update(
            {nombre: 'arroz ala'},
            {where: {nombre:'arroz'}}
        )
    })
    .then(() => {console.log("Los Registros se han actualizado")})


