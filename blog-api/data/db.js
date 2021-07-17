// En este archivo se va a crear la conexión a la base de datos
const knex = require('knex');
const knexfile = require('../knexfile');
const env = process.env.NODE_ENV || 'development'; // NODE_ENV es una variable de entorno me permite agarrar la configuración de desarrollo de mi proyecto. NODE_ENV agarra staging o production
const configOptions = knexfile[env];

module.exports = knex(configOptions); // Aqui es donde se conecta knex a la base de datos.

