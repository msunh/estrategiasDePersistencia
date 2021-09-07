const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase04', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {console.log('La conexion a la base de datos se realizo correctamenyte');})
  .catch(err => {console.error('Unable to connect to the database:', err);});



class Registros extends Sequelize.Model {}
Registros.init({
  nombre: Sequelize.STRING,
  cantidad: Sequelize.INTEGER

}, { sequelize, modelName: 'productos' });


/* punto 01 :  insertar y actualizar un registro*/
sequelize.sync()

  .then(() => 
  Registros.create({
    nombre: 'fideos',
    cantidad: '10'
  }))
  .then(jane => {console.log(jane.toJSON());})

  .then(() => { 
  Registros.update(
    {cantidad : '200'},
    {where:{nombre:'fideos'}}
  )})
  .then(() => {console.log("El registro fue actualizado")})


  
  




